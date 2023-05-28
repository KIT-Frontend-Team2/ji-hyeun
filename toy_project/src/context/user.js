import { createContext, useContext, useReducer, useState } from "react";
import { USER_DATA } from "../data/user";
const USER_INIT = USER_DATA;

export const useUserStore = () => useContext(UserStore);

const UserStore = createContext();

const UserStoreProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const contxtObj = {
    login,
    setLogin,
    USER_INIT,
  };
  return <UserStore.Provider value={contxtObj}>{children}</UserStore.Provider>;
};

export default UserStoreProvider;
