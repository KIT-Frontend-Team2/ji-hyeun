// 토이프로젝트 요구
// 전역상태관리 : reducr+context
import reducer from "../reducer/reducer";
import { useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { POST_DATA } from "../data/post";
//초기값생성
const initialstate = POST_DATA;

//저장소 생성

const postReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((item) => item.postId !== action.payload);
    case "CHANGE":
      // const newContent = e.target.value;

      const newContent = action.payload.e.target.content.value;
      if (action.payload.isEditMode) {
        let revisePart = state.find((v) => v.postId === action.payload.id);
        revisePart.post_content = newContent;
      }
      return state;
    case "ADD":
      const newPost = {
        postId: Math.floor(Math.random() * 100000 + 1),
        post_date: new Date(), // 현재 날짜와 시간을 설정합니다.
        user_name: action.payload.name,
        post_content: action.payload.content,
        img_box: [],
      };
      return [...state, newPost];
    default:
      return state;
  }
};

const TimeLineContext = createContext();

export const useTimeline = () => useContext(TimeLineContext);

//최상위 컴포넌트 생성
// 하위 app.js에게 모두 전달하기 위해서

export const TimeLineProvider = ({ children }) => {
  const [TimeLineList, dispatch] = useReducer(postReducer, initialstate);

  return (
    <TimeLineContext.Provider value={[TimeLineList, dispatch]}>
      {children}
    </TimeLineContext.Provider>
  );
};
