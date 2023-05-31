import react from "react";
import styled from "styled-components";
import { useState } from "react";
import { useTimeline } from "../../../context/timeline";
// import { POST_DATA } from '../../../data/post';

const AddTimeline = () => {
  //새로운 객체를 생성
  const [TimeLineList, dispatch] = useTimeline();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        name: e.target.nameInput.value,
        content: e.target.content.value,
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={(e) => handleAdd(e)}>
        <S.Title>
          <span>ADD TOTO LIST</span>
        </S.Title>
        <S.Content>
          <input placeholder="이름을 입력해주세요" name="nameInput" />
          <input placeholder="내용 입력" name="content"></input>
        </S.Content>
        <S.Button>ADD</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default AddTimeline;

const Wrapper = styled.div`
  border: 1px solid #333;
`;

const Form = styled.form`
  border: 1px solid #333;
`;

const Title = styled.div`
  border: 1px solid #333;
`;
const Content = styled.div`
  border: 1px solid #333;
`;
const Button = styled.button`
  border: 1px solid #333;
`;
const S = {
  Wrapper,
  Form,
  Title,
  Content,
  Button,
};
