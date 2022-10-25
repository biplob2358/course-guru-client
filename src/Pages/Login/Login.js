import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

import GoogleGitLogin from "../../GoogleGitLogin/GoogleGitLogin";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="d-flex  justify-content-center align-items-center ">
      <div className="login mx-auto mt-4 border shadow p-4">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center my-3">Login</h1>
          <p className="text-center text-danger">{error}</p>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mx-2" style={{ position: "relative", top: "2.5px" }}>
            OR
          </h5>
        </div>

        <p className="text-center">
          Are You New User?{" "}
          <Link to="/register" className="text-decoration-none text-info">
            Register
          </Link>{" "}
          Now!
        </p>
        <GoogleGitLogin></GoogleGitLogin>
      </div>
    </div>
  );
};

export default Login;
