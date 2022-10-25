import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Asset/logo/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  <BootstrapSwitchButton>
    checked={false}
    onlabel="Hello" offlabel='Regular User'
  </BootstrapSwitchButton>;
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-light  text-decoration-none" to="/">
            <img className="me-4" src={logo} width="30" height="30" alt="" />
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
            <Link
              className="text-light me-4 text-decoration-none"
              to="/profile"
            >
              {user?.displayName}
            </Link>
            <NavLink className="text-white text-decoration-none me-2">
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </NavLink>

            <BootstrapSwitchButton checked={true} onstyle="dark" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
