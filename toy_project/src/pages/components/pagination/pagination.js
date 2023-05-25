import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Pagination from "react-js-pagination";
import { POST_DATA } from "../../../data/post";
const Pagy = () => {
  const list = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <p>
        {/* {faker.date.betweens({
          from: "2020-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
          count: 1,
        })} */}
      </p>

      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => handleClick(number)}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagy;
