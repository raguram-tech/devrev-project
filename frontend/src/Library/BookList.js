import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BookList = ({ booksToDisplay }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const books = (
    <Row xs={1} sm={2} md={2} lg={2} xl={2}>
      {booksToDisplay.map((book) => (
        <div key={book._id} className="d-flex justify-content-center p-3">
          <Link to={`${book._id}`} style={linkStyle}>
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
              }}
              border="secondary"
            >
              <Card.Header>Title: {book.title}</Card.Header>
              <Card.Body>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Subject: {book.subject}</Card.Text>
                <Card.Text>Published On: {book.publishDate}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </Row>
  );
  return <div>{books}</div>;
};

export default BookList;
