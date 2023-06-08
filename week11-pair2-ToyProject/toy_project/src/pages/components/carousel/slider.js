import React, { useReducer } from "react";
import styled from "styled-components";
import { useState,useRef } from "react";
import { useEffect } from "react";
import { POST_DATA } from "../../../data/post";
import { useContext } from "react";
import { TimeLineProvider, useTimeline } from "../../../context/timeline";


//1.state 는 현재 값 action 은 state를 바꿔줄 변환값 사용할때는 dispatch필수 
//2.내가 Reducer를 사용해서 변환해줄값은..?? 음..일단 faker.js값을 받아와서 props값에 사용할수없다고했으니까
//Reducer를 사용해서 useRedcer로 사용해줘야하는데...faker.js를 어떻게 가져와서 넣어줘야할려나....
//일단 timeline에 context가있다. context가 받아와주는게const [TimeLineList, dispatch] = useReducer(postReducer,0);
//<TimeLineContext.Provider value={[TimeLineList, dispatch]}>이걸 context해서 사용하면될려나..?



function Slider(){


    const {TimeLineList,dispatch} = useContext(useTimeline)

        console.log(useTimeline);

    const onTimeline = () => {

    }

    //디스패치를 받아와서 add를 갖고와서 사용해주면될까..? --> 이거안된다 얘야
    //디스패치 받아서 add갖고오는거 말고 다른걸로 해야할거같음.  
    //아니면 잘못갖고온거같다. 아 이거 reducer로갖고와야하는데 useContext사용해서 reducer사용해줘야함. 
    //쓸때 usecallback 사용해서 해줘야함. 
    const onChangePhoto = (id) => {
        dispatch({ 
            type:"ADD",
            payload:{id}            
        })
    }



    const TOTAL_SLIDES = 10   //total slides 갯수 = postData갯수(48)
        // console.log(TOTAL_SLIDES);
    
    const [currentSlide,setCurrentSlide] = useState(0); //현재 어떤 슬라이드를 보여주고있는지보여줌
    const slideRef = useRef(null); //slider의 정보를 보여준다.

    const nextSlide = () => {
        if(currentSlide >= TOTAL_SLIDES){   //더이상넘어갈 슬라이드 없음 초기화시켜줌
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide+1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0){
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }

    useEffect(()=>{
        slideRef.current.style.transition = "all 0.5s ease-in-out";
    })



    return(
        <Container onChangePhoto={(id)=>onChangePhoto(id)}>
            {currentSlide}
        <SliderContainer ref={slideRef} onTimeline={onTimeline}>
        </SliderContainer>
        <Button onClick={prevSlide}>previous Slide</Button>
        <Button onClick={nextSlide}>Next Slide</Button>
        </Container>
        
    )
}

export default Slider;

const Container = styled.div`
    width: 60%;
    overflow: hidden;
`;
const Button = styled.button`
    all: unset;
    border: 1px solid coral;
    padding: 0.5em 2em;
    color: coral;
    &:hover {
        transition: all 0.3s ease-in-out;
        
    }
`;
const SliderContainer = styled.div`
    width: 100%;
    display: flex;
`;