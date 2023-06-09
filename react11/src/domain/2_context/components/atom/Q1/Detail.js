import ContextQ1Detail2 from "./Detail2";
import ContextQ1Modal from "./Modal";

//button을 눌렀을때 Q1Modal이 보이게 하고싶음. 

const ContextQ1Detail = ({openModal}) => {
  return (
    <>
      <h2>ContextQ1Detail</h2>
      {<ContextQ1Modal/> & true ? '' : ''}
      <button onClick={()=>openModal}>보이기</button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
