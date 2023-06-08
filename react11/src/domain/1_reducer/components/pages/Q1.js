import React, { useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import MatStoreProvider, { UseMatStore } from "../../../../store/1_reducer";
const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

/**
 * reduce를 사용해서 로직을 분리해야한다
 * 재료 추가는 useState를 사용해서 추가버튼에 주면될듯
 * 재료 삭제도 같이 사용해서 삭제버튼에 주면될거같고.....
 * 
 */


  // const [ingredients, setIngredients] = useState([
  //   { id: 1, name: "피자 도우", price: 1000 },
  //   { id: 2, name: "토마토 소스", price: 500 },
  //   { id: 3, name: "치즈", price: 1000 },
  //   { id: 4, name: "피망", price: 500 },
  //   { id: 5, name: "양파", price: 500 },
  // ]);


//reducer을 만들어줬는데 여기로 옮겨와서 써줘야함. 
//dispatch를 사용해서 useCallback으로 만들어야하는데....
  


  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   nextId.current += 1;
  // }, [username, email]);










  //이제 input에 추가할건데? 문제가있다면 재료input이랑 가격input이 따로있음. 일단 추가코드는 하나로한다음에?
  //각각 input에 넣어줘야할듯하다 된다면야..되겠지...

  //일단 비어있는 객체배열을 usestate로 만들고 그걸 전달해줄 함수를 만들어서 배열이랑 그뒤에 inputs이랑 넣어서
  //추가할수있게 하고싶은데 그렇게되면 참좋겠네 참좋겠네....아련
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);

  //     const newIngredients = {
  //       id: Math.floor(Math.random()*100000),
  //       name: e.target.name.value,
  //       price: parseInt(e.target.price.value),
  //     }
  //     setIngredients([...ingredients,newIngredients]) 
      //오답노트 작성할것. ([...ingredients],[newIngredients]) -> 아님
  // }
  



  //inputs값이바뀔때? 그 값이??어떤변수에 담겨야는데?바뀔때마다 변수에 담기고?추가버튼을눌렀을때 추가되었을때
  //onchange 버튼을 만들건데....이 버튼을 누르면 재료랑 가격이 추가되는식으로 하고싶음. 
 








  //삭제
  // const onRemove = (id) => {
  //   const newIngredientsList = ingredients.filter((it) => it.id !== id);
  //   setIngredients(newIngredientsList);
  // };
  // 위에 코드 remove를 제가  id를 지정해줬잖아요? 이거를 List를 사용할수있게 id를 그쪽으로 보내주고싶은데



  // const onRemove = (targetId) => {
  //   const newDiaryList = data.filter((it) => it.id !== targetId);
  //   setData(newDiaryList);
  // }



  return (
    <>
    <MatStoreProvider>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List />
      </table>
      <Q1Form/>
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </MatStoreProvider>
    </>
  );
  }

export default ReducerQ1Page;
