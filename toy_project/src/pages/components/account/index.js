import React from "react";
// import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import { useUserStore } from "../../../context/user";
import styled from "styled-components";
const Account = () => {
  const { login, userLogin } = useUserStore();

  return login ? (
    <p>{userLogin.email} 님</p>
  ) : (
    <>
      <Container>
        <SignUp />
        <Button>회원가입</Button>
      </Container>
    </>
  );
};

export default Account;

const Button = styled.button`
  width: 80px;
  height: 35px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
