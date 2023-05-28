import React from "react";
import SignIn from "./signIn/signIn";
import { useUserStore } from "../../../context/user";
const Account = () => {
  const { login } = useUserStore();

  return <SignIn></SignIn>;
};

export default Account;
