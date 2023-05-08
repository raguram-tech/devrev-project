import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="4" className="footer-about">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pulvinar mauris vel justo blandit euismod. Nullam ut blandit
              justo, ac mollis velit.
            </p>
          </Col>
          <Col md="4" className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fa fa-map-marker-alt"></i> KEC, Perundurai, Erode.
            </p>
            <p>
              <i className="fa fa-phone"></i> +91 999-999-9999
            </p>
            <p>
              <i className="fa fa-envelope"></i> info@example.com
            </p>
          </Col>
          <Col md="4" className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/library">Books</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md="12" className="footer-bottom">
            <p>
              Copyrights Reserved &copy; - Raguram | 2023 | Library | Terms Of
              Service | Privacy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
