import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const CourseDetails = () => {
  const printRef = React.useRef();
  const courseDetails = useLoaderData();
  const { id, name, price, rating, img, description } = courseDetails;

  //pdf
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("CourseGuru.pdf");
  };
  return (
    <div ref={printRef} className="mb-5">
      <Card className="mt-4 text-center ">
        <Card.Header className="d-flex justify-content-between">
          <h3 className="fw-bold">{name}</h3>
          <p>
            Download pdf
            <Link
              className="text-decoration-none ms-2"
              onClick={handleDownloadPdf}
            >
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
