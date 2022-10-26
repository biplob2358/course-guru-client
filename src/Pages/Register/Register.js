import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleGitLogin from "../../GoogleGitLogin/GoogleGitLogin";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        toast.success("Register successfull");
        handleUpdateUser(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleUpdateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div className="d-flex  justify-content-center align-items-center ">
      <div className="login mx-auto mt-4 border shadow p-4">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center my-3">Register</h1>
          <p className="text-center text-danger">{error}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photoURL"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={handleAccepted}
              label={
                <>
                  Accept <Link>Terms and Conditions</Link>
                </>
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!accept}>
            Register
          </Button>
        </form>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mx-2" style={{ position: "relative", top: "2.5px" }}>
            OR
          </h5>
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-info">
            Login
          </Link>{" "}
          Now!
        </p>
        <GoogleGitLogin></GoogleGitLogin>
      </div>
    </div>
  );
};

export default Register;
