const Q1Form = ({onSubmit}) => {
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
