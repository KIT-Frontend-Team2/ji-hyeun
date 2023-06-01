import { POST_DATA } from "../../../data/post";
import OneTimeline from "./one-timeline";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../../styles/common";
import { useTimeline } from "../../../context/timeline";
const TimelineList = () => {
  const [TimeLineList, dispatch] = useTimeline();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const handleNextClick = (page) => {
    if (page !== Math.ceil(TimeLineList.length / itemsPerPage)) {
      setCurrentPage(page + 1);
    }
  };
  const handlePrevClick = (page) => {
    if (page !== 1) {
      setCurrentPage(page - 1);
    }
  };
  const handleLastClick = () => {
    setCurrentPage(Math.ceil(TimeLineList.length / itemsPerPage));
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TimeLineList.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(TimeLineList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1>게시글들을 담는 타임라인페이지입니다.</h1>
      <div>
        {currentItems.map((post) => (
          <OneTimeline post={post} /> // 고유한 식별자를 전달하여 구별을 가능케 한다.
        ))}
      </div>
      <Container>
        <List onClick={() => setCurrentPage(1)}>{"<<"}</List>
        <List onClick={() => handlePrevClick(currentPage)}>{"<"}</List>
        {pageNumbers.map((number) => (
          <List
            style={{
              backgroundColor: number === currentPage ? "blue" : null,
              display:
                number <= currentPage + 2 && number >= currentPage - 2
                  ? "block"
                  : "none",
            }}
            key={number}
            onClick={() => handleClick(number)}
          >
            {number}
          </List>
        ))}
        <List onClick={() => handleNextClick(currentPage)}>{">"}</List>
        <List onClick={() => handleLastClick()}>{">>"}</List>
      </Container>
    </div>
  );
};

export default TimelineList;
const Container = styled.div`
  width: 100%;
  ${flexCenter}
  gap:10px
`;

const List = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  background-color: black;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
