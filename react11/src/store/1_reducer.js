import { createContext, useContext, useReducer } from "react";



//usestate로 Q1에 작업된걸 initialState에 옮겨담아서 state구성 작업을 했다.
//다시처음부터 리셋


const MatStore = createContext();

export const UseMatStore = () => useContext(MatStore);

const initialSate = [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]


const reducer = ( state, action ) => {
    console.log(state)
        switch (action.type) {
            case 'ADDED':
                return [...state, action.payload]; //payload 데이터
            case 'REMOVE':
                return state.filter((data)=> data.id !== action.payload.id);
            default:
                return state;
        }
    
}

const MatStoreProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialSate)
    
    return(
        <MatStore.Provider value={[state,dispatch]}>
        {children}
    </MatStore.Provider>
)
}

export default MatStoreProvider;
        
        // const UserStoreProvider = ({children}) => {
        //     const [userList,dispatch] = useReducer(userReducer,initailState);
        
        //     return(
        //         <UserStore.Provider value={[userList,dispatch]}>
        //             {children}
        //         </UserStore.Provider>
        //     )
        // }

