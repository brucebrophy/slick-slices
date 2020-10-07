import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  text-align: center;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;

const Pagination = ({ pageSize, totalCount, currentPage, skip, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasPrevPage = prevPage >= 1;
  const hasNextPage = nextPage <= totalPages;
  return (
    <StyledPagination>
      <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
        &#8592; Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          className={currentPage === 1 && index === 0 ? 'current' : ''}
          to={`${base}/${index > 0 ? index + 1 : ''}`}
        >
          {index + 1}
        </Link>
      ))}
      <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
        Next &#8594;
      </Link>
    </StyledPagination>
  );
};

export default Pagination;
