
import react from 'react'
import styled  from "styled-components";
import { useState } from 'react';
// import { POST_DATA } from '../../../data/post';


const AddTimeline = ({timeline, setTimeline}) => {

  //새로운 객체를 생성 
  const [user_name, setTitle] = useState("")
  const [post_content, setContent] = useState("")


  console.log(`타임라인 확인 `,timeline)


  console.log(user_name, post_content)
  const showMessage = (e) => {
    e.preventDefault()
    const newPost = {
      postId : Math.random() * 100000,
      user_name,
      post_content,
    }
    console.log(newPost)
    const updatePost = [...timeline, newPost]
    setTimeline(updatePost)
  } 

  return(
    <S.Wrapper>
      <S.Form onSubmit={showMessage}> 
        <S.Title>
          <span>ADD TOTO LIST</span>
        </S.Title>
        <S.Content>
          <input placeholder="제목을 입력해주세요" name="title" onChange={(e) =>setTitle(e.target.value)} />
          <textarea placeholder="내용 입력" name="content" onChange={(e)=> setContent(e.target.value)} ></textarea>
        </S.Content>
        <S.Button >ADD</S.Button>
      </S.Form>
  </S.Wrapper>
  )
}

export default AddTimeline;

const Wrapper = styled.div`
  border:  1px solid #333;
`

const Form = styled.form`
  border:  1px solid #333;
`

const Title = styled.div`
  border:  1px solid #333;
`
const Content = styled.div`
  border:  1px solid #333;
`
const Button = styled.button`
  border:  1px solid #333;
`
const S = {
  Wrapper, 
  Form,
  Title,
  Content,
  Button
}
