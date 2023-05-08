import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import books from "../data/books.json";
import Pagination from "./Pagination";
import BookList from "./BookList";
import Filter from "./Filter";
import Footer from "../Footer/Footer";

// define number of books per page
const BOOKS_PER_PAGE = 10;

function Library() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [filterPublishDate, setFilterPublishDate] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };

    fetchBooks();
  }, []);

  // filter books based on search criteria
  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const authorMatch = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase());
    const subjectMatch = book.subject
      .toLowerCase()
      .includes(filterSubject.toLowerCase());
    // const publishDateMatch = book.publishDate
    //   .toLowerCase()
    //   .includes(filterPublishDate.toLowerCase());
    return titleMatch && authorMatch && subjectMatch;
  });

  // calculate total number of pages based on number of filtered books and books per page
  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);

  // calculate index of first book to display based on current page and books per page
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;

  // slice filtered books array based on startIndex and books per page to get books to display
  const booksToDisplay = filteredBooks.slice(
    startIndex,
    startIndex + BOOKS_PER_PAGE
  );

  // function to handle pagination click
  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  // function to handle filtering based on search criteria
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setFilterTitle(value);
        setCurrentPage(1);
        break;
      case "author":
        setFilterAuthor(value);
        setCurrentPage(1);
        break;
      case "subject":
        setFilterSubject(value);
        setCurrentPage(1);
        break;
      case "publishDate":
        setFilterPublishDate(value);
        setCurrentPage(1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* */}
      <div className="d-flex justify-content-center p-3">
        <Filter
          filterTitle={filterTitle}
          filterAuthor={filterAuthor}
          filterSubject={filterSubject}
          filterPublishDate={filterPublishDate}
          onFilterChange={handleFilterChange}
        />
      </div>

      <h4>Total books: {filteredBooks.length}</h4>

      <Container>
        <BookList booksToDisplay={booksToDisplay} />
      </Container>
      <Container className="p-3">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageClick={handlePaginationClick}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Library;
