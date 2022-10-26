import React from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Asset/logo/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [theme, setTheme] = useState("Light");
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut successfull");
      })
      .catch((error) => console.error(error));
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <span>{user?.displayName}</span>
    </Tooltip>
  );

  const handleToggle = () => {
    let val = theme;

    val === "Light" ? setTheme("Dark") : setTheme("Light");
  };

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
            <div className="text-light me-4 text-decoration-none" to="/profile">
              {user?.uid ? (
                <>
                  <NavLink className="text-white text-decoration-none mx-1">
                    {user?.photoURL ? (
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Image
                          style={{ height: "40px" }}
                          roundedCircle
                          src={user.photoURL}
                        ></Image>
                      </OverlayTrigger>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </NavLink>
                  <Link
                    className="text-light ms-2 text-decoration-none"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="text-light me-4 text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-light me-4 text-decoration-none"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <div className="bg-white px-2 rounded">
              <div className="form-check form-switch  ">
                <label className="form-check-label  " htmlFor="lightSwitch">
                  {theme}
                </label>
                <input
                  onClick={handleToggle}
                  className="form-check-input "
                  type="checkbox"
                  id="lightSwitch"
                />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
