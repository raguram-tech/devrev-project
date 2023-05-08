import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import libraryImg from "../images/library.jpg";
import libImg from "../images/libimg.jpg";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Container className="home-page-container">
        <Row className="home-page-row">
          <Col md={6} className="home-page-col">
            <h1>Welcome to the Library</h1>
            <p>
              We have a vast collection of books, covering various genres and
              topics.
            </p>
            <p>Explore our collection and find your next read!</p>
            <Button variant="primary" href="/library">
              View All Books
            </Button>
          </Col>
          <Col md={6} className="home-page-col">
            <Image src={libraryImg} alt="Library" fluid />
          </Col>
        </Row>
        <Row className="home-page-row">
          <Col md={6} className="home-page-col">
            <Image src={libImg} alt="Library" fluid />
          </Col>
          <Col md={6} className="home-page-col">
            <h2>About Us</h2>
            <p>
              We are a community-focused library that is dedicated to promoting
              the joy of reading and learning. Our mission is to provide a
              diverse collection of books and resources to our patrons.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
