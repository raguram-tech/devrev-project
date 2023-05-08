import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8}>
          <h2>For Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="m-3"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="m-3"
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                className="m-3"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <h2>Contact Information</h2>
          <p>KEC, Perundurai,</p>
          <p>Erode.</p>
          <p>+91 888-888-8888</p>
          <p>info@example.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
