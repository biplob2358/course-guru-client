import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

const Register = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login mx-auto">
        <form>
          <h1 className="text-center my-3">Register</h1>
          <input
            type="text"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder="Name"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <input
            type="email"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder="Email"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <input
            type="password"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder=" Password"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <input
            type="password"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <button className="d-block mx-auto btn btn-primary" type="submit">
            Register
          </button>
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
        <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2">
          <FcGoogle></FcGoogle>
          <span className="ms-2">Continue With Google</span>
        </button>
        <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2">
          <FiGithub></FiGithub>
          <span className="ms-2">Continue With Github</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
