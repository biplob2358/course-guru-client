import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  <BootstrapSwitchButton>
    checked={false}
    onlabel="Hello" offlabel='Regular User'
  </BootstrapSwitchButton>;

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">COURSE GURU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link to="#deets">Home</Nav.Link>
            <Nav.Link href="#des">Courses</Nav.Link>
            <Nav.Link href="#eet">FAQ</Nav.Link>
            <Nav.Link href="#deet">Blog</Nav.Link>
            <Nav.Link href="#deet">Logout</Nav.Link>
            <Nav.Link href="#deet">login</Nav.Link>

            <BootstrapSwitchButton checked={true} onstyle="dark" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
