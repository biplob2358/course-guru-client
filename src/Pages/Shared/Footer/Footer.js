import "./Footer.css";
import React from "react";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMicrosoft,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer bg-primary mt-auto">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About us</span> At Course Guru, we’re all learners and
          instructors. We live out our values every day to create a culture that
          is diverse, inclusive, and committed to helping employees thrive.
        </p>
        <div className="icons ">
          <Link to="#">
            <FaFacebook></FaFacebook>
          </Link>

          <Link>
            <FaInstagram></FaInstagram>
          </Link>
          <Link>
            <FaMicrosoft></FaMicrosoft>
          </Link>
        </div>
      </div>
      <div className="footer-center  col-md-4 col-sm-6">
        <div>
          <p>
            <span>
              {" "}
              <FaAddressBook className="me-2"></FaAddressBook>Gulshan-1
            </span>{" "}
            <FaLocationArrow className="me-2"></FaLocationArrow>Dhaka,
            Bangladesh
          </p>
        </div>
        <div>
          <p>
            {" "}
            <FaPhoneAlt></FaPhoneAlt> (+88) 01784168743{" "}
          </p>
        </div>
        <div>
          <p>
            <Link className="text-light" href="#">
              {" "}
              <FiMail className="me-2"></FiMail>course.guru@edu.bd
            </Link>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2> Course Guru</h2>

        <p className="name text-light"> Copyright &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
