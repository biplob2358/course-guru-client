import React from "react";
import { Link } from "react-router-dom";
import GoogleGitLogin from "../../GoogleGitLogin/GoogleGitLogin";

const Register = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login mx-auto  border shadow p-4">
        <form>
          <h1 className="text-center my-3">Register</h1>
          <input
            type="text"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder="Your Full Name"
            style={{ backgroundColor: "#F5F5F5" }}
            required
          />
          <input
            type="text"
            className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2"
            placeholder="Photo URL"
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
        <GoogleGitLogin></GoogleGitLogin>
      </div>
    </div>
  );
};

export default Register;
