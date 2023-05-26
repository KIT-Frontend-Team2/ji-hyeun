


const ReducerQ1List = ({ ingredients,onRemove}) => {
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => {onRemove(ingredient.id);}}>삭제</button> 
          </td>
        </tr>
      ))}
    </tbody>
  
  // (id)값을 전달해줘야하는데? id값은 ReducerQ1List에있음. id값을 가져와야함.
  );
};
/**맵함수를 사용해서 키값을정해주고 리무브를 props해주기 */
// {diaryList.map((it) => (
//   <DiaryItem key={it.id} {...it} onRemove={onRemove}/>
// ))}
export default ReducerQ1List;
