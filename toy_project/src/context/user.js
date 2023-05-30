import { createContext, useContext, useReducer, useState } from "react";
import { USER_DATA } from "../data/user";
const USER_INIT = USER_DATA;

export const useUserStore = () => useContext(UserStore);

const UserStore = createContext();

const UserStoreProvider = ({ children }) => {
  const [userLogin, setUserFound] = useState(null);

  const [login, setLogin] = useState(false);
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    const userList = USER_INIT;
    const userFound = userList.find(
      (v) => v.email === data.email && v.password === data.password
    );
    if (userFound !== undefined) {
      setUserFound(userFound); // 상태를 업데이트합니다.
      setLogin(true);
    }
    if (userFound === undefined) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
      setLogin(false);
    }
  };
  const contxtObj = {
    login,
    setLogin,
    USER_INIT,
    onSubmit,
    userLogin,
    setUserFound,
  };

  return <UserStore.Provider value={contxtObj}>{children}</UserStore.Provider>;
};

export default UserStoreProvider;
