import "./Footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaMicrosoft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About us</span> Ut congue augue non tellus bibendum, in varius
          tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio
          condimentum in. Sed sed est ut sapien ultrices eleifend. Integer
          tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
          Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
          Nam ut nibh mollis, tristique ante sed, viverra massa.
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
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <p>
            <span> Gulshan-1</span> Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <p> (+88) 01784168743</p>
        </div>
        <div>
          <p>
            <Link className="text-light" href="#">
              {" "}
              office@company.com
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
