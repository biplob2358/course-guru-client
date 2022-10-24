import React from "react";
import { FaSadCry } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "500px" }}
      className="d-flex justify-content-center align-items-center w-100"
    >
      <div className="text-center">
        <h1>
          404 not found <FaSadCry></FaSadCry>{" "}
        </h1>

        <h1>You are looking for a page that doesn't exist</h1>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
