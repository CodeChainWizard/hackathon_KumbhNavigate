import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Kumbh<span className="text-[#ffffffad]">navigate</span>
          </h3>

          <p className="footer-links">
            <Link to={"/"} className="link-1">
              Home
            </Link>

            <Link to={"/About"}>About</Link>

            <Link to={"/Contact"}>Contact</Link>
          </p>

          <p className="footer-company-name">Kumbh-navigator © 2024</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Sarvajanik University</span> Shree Ramkrishna Institute of
              Computer Education & Applied Sciences.
            </p>
          </div>

          <div className="flex mt-[30px] ml-[30px]">
            <FaPhoneAlt className="text-[#fff] mr-[10px]" />
            <p>+123456789</p>
          </div>

          <div className="flex mt-[30px]">
            <IoMdMail className="text-[#fff] ml-[30px] mr-[10px]" />

            <a href="mailto:support@company.com" className="text-[#ffffffd6]">
              abc@agmail.com
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <FaGoogle className="hover:text-[#4F89EF] duration-200" />
            </a>
            <a href="#">
              <FaFacebook className="hover:text-[#316FF6] duration-200" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-[#1DA1F2] duration-200" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-[#0A66C2] duration-200" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
