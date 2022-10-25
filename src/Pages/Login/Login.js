import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import GoogleGitLogin from "../../GoogleGitLogin/GoogleGitLogin";

const Login = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login mx-auto  border shadow p-4">
        <form>
          <h1 className="text-center my-3">Login</h1>
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
            placeholder="Password"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <button className="d-block mx-auto btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mx-2" style={{ position: "relative", top: "2.5px" }}>
            OR
          </h5>
        </div>
        <p className="text-primary text-center" style={{ cursor: "pointer" }}>
          Forget Password?
        </p>
        <p className="text-center">
          New User ?{" "}
          <Link to="/register" className="text-decoration-none text-info">
            Sign Up
          </Link>{" "}
          Now!
        </p>
        <GoogleGitLogin></GoogleGitLogin>
      </div>
    </div>
  );
};

export default Login;
