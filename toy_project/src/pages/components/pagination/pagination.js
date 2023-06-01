import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Pagination from "react-js-pagination";
import { POST_DATA } from "../../../data/post";
import { flexCenter } from "../../../styles/common";
import styled from "styled-components";

const Pagy = () => {
  console.log(POST_DATA[0].post_date.getDate());
  console.log(POST_DATA[0].post_date.getDay());
  console.log(POST_DATA[0].post_date.getFullYear());

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const handleNextClick = (page) => {
    setCurrentPage(page + 1);
  };
  const handlePrevClick = (page) => {
    setCurrentPage(page - 1);
  };
  const handleLastClick = () => {
    setCurrentPage(Math.ceil(POST_DATA.length / itemsPerPage));
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = POST_DATA.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(POST_DATA.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {currentItems.map((data, index) => {
          return (
            <div key={data.postId} style={{ marginBottom: "20px" }}>
              <li>{data.post_content}</li>
              <li>
                {data.post_date.getFullYear()}-{data.post_date.getDate()}-
                {data.post_date.getDay()}
              </li>
              <li>{data.user_name}</li>
            </div>
          );
        })}
      </ul>
      <ul
        style={{
          display: "flex",
          textAlign: "center",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        {" "}
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
      </ul>
    </div>
  );
};

export default Pagy;

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
