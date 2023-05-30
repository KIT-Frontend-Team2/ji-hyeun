
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faSquarePlus, faHeart} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// import { useTimeline } from '../../../context/timeline';

// 객체를 전달받는다. 
const OneTimeline = ({post,postId,timeline,setTimeline}) => {


  const [content, setContent] = useState(post.post_content)
  const [isEditMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    if(!isEditMode) {
      setContent('');
      return setEditMode(true)
    }
    setEditMode(false)
    // handleUpdateTodo(postId, content)

  }

  // textarea의 값을 받아와서 다시 넣어주기 
  const onChangeText = (e) => {
    const newContent = e.target.value
    if(isEditMode){
      setContent(newContent)
    }
    console.log(`one-timeline확인`,timeline)
  }

  const handleDelete =(postId) => {
    const deleteList = timeline.filter((itme)=> itme.postId !== postId)
    setTimeline(deleteList)
  }



  return(
    <S.Wrapper >
      <S.Header>
        {/* <S.StateBox >
          <FontAwesomeIcon icon={faCheck} />
        </S.StateBox> // 여기까지가 이미지 캐러셀 */}
      </S.Header>
      <S.Content> 
        <S.Title >
            {post.user_name}
            <FontAwesomeIcon icon={faHeart}/>
        </S.Title>
        <S.Section>
            <div>
                <div>
                  <FontAwesomeIcon icon={faSquarePlus} onClick={handleEditMode}/>
                  <FontAwesomeIcon icon={faBan} onClick={()=> handleDelete(postId)}/>
                </div>
                {/* {post.post_date.getFullYear()}-{post.post_date.getDate()}-
                {post.post_date.getDay()}   */}
            </div>
                {isEditMode ? <textarea value={content} onChange={onChangeText}></textarea> : content}
                  {/* {isEditMode ? <textarea value={content}></textarea> : content}  // 댓글  */}
            </S.Section>
    </S.Content>
  </S.Wrapper>
  )
}

//onChange={handleChangeContent}

export default OneTimeline; 


const Wrapper = styled.li`
  border: 1px solid ${({theme})=>(theme.PALETTE.glay)}
`;

const Header = styled.div`
  border: 1px solid ${({theme})=>(theme.PALETTE.glay)}
`;


const Content = styled.div`
border: 1px solid ${({theme})=>(theme.PALETTE.glay)}
`;

const Title = styled.h1`
border: 1px solid ${({theme})=>(theme.PALETTE.glay)}
`;

const Section = styled.div`
padding: 16px;
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;





const S = {
  Wrapper,
  Header,
  Content,
  Title,
  Section
};
