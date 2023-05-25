import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Pagination from "react-js-pagination";
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
      <img src={faker.image.avatar()} alt="random test image" />

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
