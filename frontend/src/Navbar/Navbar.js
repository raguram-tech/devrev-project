import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Library</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink href="/" exact className="nav-link">
            Home
          </NavLink>
          <NavLink href="/about" className="nav-link">
            About
          </NavLink>
          <NavLink href="/library" className="nav-link">
            Books List
          </NavLink>
          <NavLink href="/addbook" className="nav-link">
            Add Book
          </NavLink>
          <NavLink href="/contact" className="nav-link">
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
