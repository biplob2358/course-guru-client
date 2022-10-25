import React from "react";
import { Button } from "react-bootstrap";

const CheckOutForm = ({ checkOutDetails }) => {
  return (
    <div className="w-75   text-center">
      <form className="border shadow p-4">
        <input
          type="text"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Name"
          style={{ backgroundColor: "#F5F5F5" }}
          required
        />

        <input
          type="email"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Email"
          style={{ backgroundColor: "#F5F5F5" }}
          readOnly
        />
        <input
          type="text"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Address"
          style={{ backgroundColor: "#F5F5F5" }}
          required
        />
        <input
          type="text"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="District"
          style={{ backgroundColor: "#F5F5F5" }}
          required
        />
        <input
          type="number"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Phone Number"
          style={{ backgroundColor: "#F5F5F5" }}
          required
        />
        <Button className="mt-2">Order Now</Button>
      </form>
    </div>
  );
};

export default CheckOutForm;
