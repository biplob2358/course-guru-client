import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideNav from "../Pages/Shared/SideNav/SideNav";

const CoursesMain = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <SideNav></SideNav>
          </Col>
          <Col lf="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesMain;
