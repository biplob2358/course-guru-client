import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;

  const handleOrder = () => {
    toast.success("Check Out successfully");
  };
  return (
    <div className="w-75 mb-5  text-center">
      <form className="border shadow p-4">
        <input
          type="text"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Name"
          style={{ backgroundColor: "#F5F5F5" }}
          defaultValue={displayName}
          required
        />

        <input
          type="text"
          className="w-100 mx-auto d-block py-2 px-4 border-0 mb-2"
          placeholder="Email"
          style={{ backgroundColor: "#F5F5F5" }}
          required
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
        <Button onClick={handleOrder} className="mt-2">
          Check Out
        </Button>
      </form>
    </div>
  );
};

export default CheckOutForm;
