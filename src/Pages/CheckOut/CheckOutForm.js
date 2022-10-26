import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import Form from "react-bootstrap/Form";

const CheckOutForm = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    toast.success("Check Out successfully");
    form.reset();
  };
  return (
    <div className="w-75 mb-5  text-center ">
      <Form onSubmit={handleOrder} className="shadow rounded">
        <Form.Group className=" p-2" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="name"
            defaultValue={displayName}
          />
        </Form.Group>
        <Form.Group className=" p-2" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="p-2" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Address" required />
        </Form.Group>
        <Form.Group className="p-2" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Mobile Number" required />
        </Form.Group>

        <Button className="mb-2" variant="primary" type="submit">
          Check Out
        </Button>
      </Form>
    </div>
  );
};

export default CheckOutForm;
