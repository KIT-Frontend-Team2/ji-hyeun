import styled from "styled-components";


const ContextQ1Modal = ({openModal,closeModal}) => {

  //display에서 openModal이 true이면? black해라인데
  return (
    <>
    <S.div style={{display:openModal ? "open" : ""}}>
      <button onClick={closeModal}>Close</button>
      <h1>ContextQ1Modal</h1>
    </S.div> 
    </>
  );
};
export default ContextQ1Modal;




const S = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;

`;

