import React from "react";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div>
      <Container>
        <Card className="mt-4">
          <Card.Body className="text-start">
            <Card.Title>What is cors? </Card.Title>
            <Card.Text>
              CORS is shorthand for Cross-Origin Resource Sharing. It is a
              mechanism to allow or restrict requested resources on a web server
              depend on where the HTTP request was initiated. This policy is
              used to secure a certain web server from access by other website
              or domain
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body className="text-start">
            <Card.Title>
              {" "}
              Why are you using firebase? What other options do you have to
              implement authentication?{" "}
            </Card.Title>
            <Card.Text>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
              <br />
              <span className="fw-bold">Other options</span>
              <li>Auth0 </li>
              <li>MongoDB</li>
              <li>, Passport</li>
              <li> Okta</li>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body className="text-start">
            <Card.Title> How does the private route work? </Card.Title>
            <Card.Text>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-4">
          <Card.Body className="text-start">
            <Card.Title> What is Node? How does Node work? </Card.Title>
            <Card.Text>
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests
              <br />
              <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Blog;
