import React from "react";
import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  width; 100%;
  cursor: pointer;
  margin : 1rem;
  justify-content: center;

  span {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
  }
  span:hover{
    background-color: #4CAF50;
  }
  span:active{
    background-color: aqua;
    color: white;
    border: 1px solid #4CAF50;
  }
`;


const Paging = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Page>
      {pageNumber.map((pageNum) => (
        <span
          key={pageNum}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </span>
      ))}
    </Page>
  );
};

export default Paging;
