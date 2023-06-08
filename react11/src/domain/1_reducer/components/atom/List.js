import { UseMatStore } from "../../../../store/1_reducer";




const ReducerQ1List = () => {

  const [state,dispatch] = UseMatStore();

  

  const onRemove = (id) => {

              console.log(id)
      dispatch({
        type: 'REMOVE',
        payload:{id}
      });
      // const onRemove = (id) => {
  //   const newIngredientsList = ingredients.filter((it) => it.id !== id);
  //   setIngredients(newIngredientsList);
  // };

  }
 
  return(
      state.map((state) => (
        <tr>
          <td>{state.name}</td>
          <td>{state.price}</td>
          <td>
            <button onClick={() => onRemove(state.id)}>삭제</button> 
          </td>
        </tr>
      ))
  );
  
  // (id)값을 전달해줘야하는데? id값은 ReducerQ1List에있음. id값을 가져와야함.
  
};
/**맵함수를 사용해서 키값을정해주고 리무브를 props해주기 */
// {diaryList.map((it) => (
//   <DiaryItem key={it.id} {...it} onRemove={onRemove}/>
// ))}
export default ReducerQ1List;
