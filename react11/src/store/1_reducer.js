

import { createContext, useContext, useReducer } from "react";


const initialState =  [
{ id: 1, name: "피자 도우", price: 1000 },
{ id: 2, name: "토마토 소스", price: 500 },
{ id: 3, name: "치즈", price: 1000 },
{ id: 4, name: "피망", price: 500 },
{ id: 5, name: "양파", price: 500 },];


//usestate로 Q1에 작업된걸 initialState에 옮겨담아서 state구성 작업을 했다.
//

const InitReducer = (state, action) => {

    console.log(state); 
    switch (action.type) {
      case 'DELETE':
        return  state.filter((initialState) =>  initialState.id !== action.payload.id)
        
        case 'UPLOAD' : 
        // console.log("upload", action.payload)
        const newInitialState = {
         id: Math.random() * 100000,
         }
        return{
         ...state,
         newInitialState
         }
         default : return state   
        }
        
    }


        // const InItProvider = ({children}) => {
        //     const [state,dispatch] = useReducer(initReducer,initialState)

        //     return(
        //         <inItProvider value={[state,dispatch]}>
        //             {children}
        //         </inItProvider>
        //     )
        // }
        
        // const UserStoreProvider = ({children}) => {
        //     const [userList,dispatch] = useReducer(userReducer,initailState);
        
        //     return(
        //         <UserStore.Provider value={[userList,dispatch]}>
        //             {children}
        //         </UserStore.Provider>
        //     )
        // }
    export const  useUserInIt = () => useContext(UseInInt);

    const UseInInt = createContext();


    export default InitReducer;
   
