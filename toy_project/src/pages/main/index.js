import React from "react";
import Pagy from "../components/pagination/pagination";
import SignIn from "../components/account/signIn/signIn";
import { USER_DATA } from "../../data/user";
import Account from "../components/account";
const MainPage = () => {
  const userList = localStorage.setItem("user", JSON.stringify(USER_DATA));

  return (
    <div>
      <Account></Account>
    </div>
  );
};

export default MainPage;
