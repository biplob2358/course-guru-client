import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCourse = ({ course }) => {
  const { id, name, price, rating, img, description } = course;
  return (
    <div>
      <Card className="mt-4" style={{ height: "500px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 200)}...</Card.Text>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Price:${price}</p>

            <p className="fw-bold">
              <FaStar className="text-warning me-2"></FaStar>Rating:{rating}
            </p>
          </div>
        </Card.Body>

        <Link to={`${id}`} className="text-light">
          {" "}
          <Button className="w-100 h-100"> View Details</Button>
        </Link>
      </Card>
    </div>
  );
};

export default AllCourse;
