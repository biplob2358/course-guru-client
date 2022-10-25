import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CheckOut.css";
import CheckOutForm from "./CheckOutForm";

const CheckOut = () => {
  const checkOutDetails = useLoaderData();
  const { name, price, img, rating } = checkOutDetails;
  return (
    <div className="container mt-4">
      <div className="checkout-container">
        <div className="d-flex justify-content-center align-items-center me-4 left-div">
          <div className="text-center">
            <img src={img} alt="" className="img-fluid rounded-3" />
            <h1>{name}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center right-div">
          <table className="table table-bordered shadow ">
            <thead>
              <tr>
                <th scope="col">Course Name:</th>
                <th scope="col">{name}</th>
              </tr>
              <tr>
                <th scope="col">Price:</th>
                <th scope="col">${price}</th>
              </tr>
              <tr>
                <th scope="col">Rating:</th>
                <th scope="col">{rating}</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="d-flex justify-content-center align-items-center right-div">
          <CheckOutForm checkOutDetails={checkOutDetails}></CheckOutForm>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
