import { Button, ButtonGroup } from "react-bootstrap";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({ currentPage, totalPages, onPageClick }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const MAX_PAGES = 10;
  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > MAX_PAGES) {
    const halfMax = Math.floor(MAX_PAGES / 2);
    const startOffset = currentPage - halfMax;
    const endOffset = currentPage + halfMax;

    if (startOffset > 1) {
      startPage = startOffset;
    } else {
      startPage = 1;
    }

    if (endOffset < totalPages) {
      endPage = endOffset;
    } else {
      endPage = totalPages;
    }
  }

  return (
    <div>
      <ButtonGroup>
        {currentPage > 1 && (
          <Button onClick={() => onPageClick(currentPage - 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        )}

        {startPage > 1 && <Button onClick={() => onPageClick(1)}>1</Button>}

        {startPage > 2 && <Button disabled>...</Button>}

        {pageNumbers.slice(startPage - 1, endPage).map((page) => (
          <Button
            key={page}
            onClick={() => onPageClick(page)}
            active={page === currentPage}
          >
            {page}
          </Button>
        ))}

        {endPage < totalPages - 1 && <Button disabled>...</Button>}

        {endPage < totalPages && (
          <Button onClick={() => onPageClick(totalPages)}>{totalPages}</Button>
        )}

        {currentPage < totalPages && (
          <Button onClick={() => onPageClick(currentPage + 1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

export default Pagination;
