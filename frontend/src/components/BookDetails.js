import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const BookDetails = () => {
  const { bookId } = useParams(); // gets the book ID from the URL parameter
  const [book, setBook] = useState(null);

  //   const bookData = book.find((book) => book._id === bookId);
  useEffect(() => {
    fetch(`/api/books/${bookId}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        console.log(data);
      });
  }, [bookId]);
  return (
    <Container>
      {book ? (
        <Row className="justify-content-md-center mt-3">
          <Col md="auto">
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.author}
                </Card.Subtitle>
                <Card.Text>{book.subject}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published on {book.publishDate}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Loading book details...</p>
      )}
    </Container>
  );
};

export default BookDetails;
