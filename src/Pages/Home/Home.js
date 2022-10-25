import React from "react";
import { Card, CardGroup, Carousel, Container } from "react-bootstrap";
import banner1 from "../../Asset/banner/banner-1.jpg";
import banner2 from "../../Asset/banner/banner-2.jpg";
import banner3 from "../../Asset/banner/banner-3.jpg";
import img1 from "../../Asset/Body/img-1.jpg";
import img2 from "../../Asset/Body/img-2.jpg";
import img3 from "../../Asset/Body/img-3.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container>
        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption className="bg-primary bg-opacity-50 rounded">
              <h3>Learn from today</h3>
              <p>Learnig will help you to find future</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />

            <Carousel.Caption className="bg-primary bg-opacity-50 rounded">
              <h3>Learn with Course Guru</h3>
              <p>Learnig will help you to find future</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption className="bg-primary bg-opacity-50 rounded">
              <h3>Online Education </h3>
              <p>Online education is electronically supported learning</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* Why Course Guru */}
      <Container className="mt-5">
        <h1 className="App">Why Course Guru?</h1>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Life Time Support</Card.Title>
              <Card.Text>
                Every Student will get life time support from Course Guru.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Life Time Access</Card.Title>
              <Card.Text>
                Every Student will get life time access purchase courses from
                Course Guru.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Job Placement</Card.Title>
              <Card.Text>
                Top Student will get Job placement opportunity from Course Guru.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Home;
