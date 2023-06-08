
// 상태 업데이트 로직 reducer 


const reducer = (state, action) => {
  // console.log(state,action)
  switch(action.type){
    case 'UPLOAD' : 
    console.log("upload", action.payload)
    const newTimeline = {
     id: Math.random() * 100000,
     }
    return{
     ...state,
     newTimeline
     }
    case 'FIND' : 
    // console.log("upload", action.payload)
    return{}
    case 'DELETE' : 
    // console.log("upload", action.payload)
    return state.filter((item) =>  item.id !== action.payload.id)
    default :
    return state 
  }
}

export default reducer