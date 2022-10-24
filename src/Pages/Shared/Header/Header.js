import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Asset/logo/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  <BootstrapSwitchButton>
    checked={false}
    onlabel="Hello" offlabel='Regular User'
  </BootstrapSwitchButton>;

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-light  text-decoration-none" to="/">
            <img
              className="me-4"
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            COURSE GURU
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex  align-items-center">
            <Link className="text-light me-4 text-decoration-none" to="/home">
              Home
            </Link>
            <Link
              className="text-light me-4 text-decoration-none"
              to="/courses"
            >
              Courses
            </Link>
            <Link className="text-light  me-4 text-decoration-none" to="/faq">
              FAQ
            </Link>
            <Link className="text-light me-4 text-decoration-none" to="/blog">
              Blog
            </Link>
            <Link className="text-light me-4 text-decoration-none" to="/logout">
              Logout
            </Link>
            <Link className="text-light me-4 text-decoration-none" to="/login">
              Login
            </Link>
            <Link
              className="text-light me-4 text-decoration-none"
              to="/register"
            >
              Register
            </Link>

            <BootstrapSwitchButton checked={true} onstyle="dark" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
