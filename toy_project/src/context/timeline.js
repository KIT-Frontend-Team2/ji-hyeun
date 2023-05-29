// 토이프로젝트 요구 
// 전역상태관리 : reducr+context 
import reducer from "../reducer/reducer";

import { createContext, useContext, useReducer } from "react";

//초기값생성
const initialstate = [
    {
    id: 1,
    name: "영화",
    titie: '',
    content: ''
    },
];


//저장소 생성 

export const useTimeline = () => useContext(TimeLineContext)
const TimeLineContext = createContext()

//최상위 컴포넌트 생성 
// 하위 app.js에게 모두 전달하기 위해서 

export const TimeLineProvider = ({children}) => {

  const [TimeLineList, dispatch] = useReducer(reducer,initialstate)

  return(
    <TimeLineContext.Provider value={[TimeLineList, dispatch]}>
      {children}
    </TimeLineContext.Provider>  
  )
}



