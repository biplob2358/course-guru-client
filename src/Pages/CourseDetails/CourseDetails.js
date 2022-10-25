import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar, FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, name, price, rating, img, description } = courseDetails;
  return (
    <div>
      <Card className="mt-4 text-center ">
        <Card.Header className="d-flex justify-content-between">
          <h3 className="fw-bold">{name}</h3>
          <p>
            Download pdf
            <Link className="text-decoration-none ms-2">
              {" "}
              <FaDownload></FaDownload>
            </Link>
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={img} />
          <Card.Title></Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/checkOut/${id}`}>
            <Button variant="primary">Get premium access</Button>
          </Link>
        </Card.Body>

        <Card.Footer className=" d-flex justify-content-between">
          <p className="fw-bold">Price:${price}</p>
          <p className="fw-bold">
            {" "}
            <FaStar className="text-warning me-2"></FaStar>Rating:{rating}
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
