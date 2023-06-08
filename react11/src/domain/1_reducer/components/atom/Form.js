import { UseMatStore } from "../../../../store/1_reducer";

const Q1Form = () => {



  const [state,dispatch] = UseMatStore();

  const onSubmit = (e) => {
      e.preventDefault();
      console.log(e);
        
      const newState = {
        id: Math.floor(Math.random()*100000),
        name: e.target.name.value,
        price:e.target.price.value,
      } 

      
      
      dispatch({
          type:'ADDED',
          payload:{...newState}
  },
  )}
 // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);

  //     const newIngredients = {
  //       id: Math.floor(Math.random()*100000),
  //       name: e.target.name.value,
  //       price: parseInt(e.target.price.value),
  //     }
  //     setIngredients([...ingredients,newIngredients]) 



      
  return (
    <form onSubmit={onSubmit} >
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격"/> 
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;

//input 아래꺼가 type이 넘버여서 안넘어가지는건가??그러면 위에꺼는 넘어가져야하는거아님? 함수전달이잘안된건가??
