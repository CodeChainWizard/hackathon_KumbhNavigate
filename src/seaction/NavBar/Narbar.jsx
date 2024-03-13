import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { driver } from "driver.js";
import { TbWorld } from "react-icons/tb";
import { Menu, MenuItem } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import "driver.js/dist/driver.css";

// INTERNAL IMPORT
import "./Navbar.css"; // Import your CSS file for styling
import asserts from "../../assets/logo__2_-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: ".navbar-logo",
          popover: {
            title: "Home",
            description: "This tab is used to describe what is mahabubhm",
          },
        },
        {
          element: ".navbar-links a:nth-child(1)",
          popover: {
            title: "About",
            description: "This tab is for the About page",
          },
        },
        {
          element: ".navbar-links a:nth-child(2)",
          popover: {
            title: "Contact",
            description: "This tab is for the Contact page",
          },
        },
        {
          element: ".navbar-links a:nth-child(3)",
          popover: {
            title: "Navigate",
            description: "This tab is for navigating to various sections",
          },
        },
        {
          element: ".navbar-links a:nth-child(4)",
          popover: {
            title: "Navigate",
            description: "This tab is for navigating to various sections",
          },
        },
        {
          element: ".navbar-links button",
          popover: {
            title: "Login",
            description: "This button is for logging in",
          },
        },
      ],
    });

    if (!localStorage.getItem("driver_visited")) {
      driverObj.drive();
      localStorage.setItem("driver_visited", "true");
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleTranslateClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleTranslateClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to={"/"}>
            <img src={asserts} alt="Login" width={200} height={50} />
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
          <Link to={"/Navigate"}>Navigate</Link>
          <TbWorld
            to={"translate"}
            className="translate-icon"
            onClick={(e) => handleTranslateClick(e)}
          />
          <Menu
            id="translate-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleTranslateClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className="mt-3"
          >
            <MenuItem onClick={handleTranslateClose}>English</MenuItem>
            <MenuItem onClick={handleTranslateClose}>Gujarati</MenuItem>
            <MenuItem onClick={handleTranslateClose}>Hindi</MenuItem>
            <MenuItem onClick={handleTranslateClose}>Spanish</MenuItem>
            <MenuItem onClick={handleTranslateClose}>French</MenuItem>
          </Menu>
          {isAuthenticated && <h3>Hello, {user.name}</h3>}
          {isAuthenticated ? (
            <Link>
              <button onClick={() => logout()} className="login">
                Logout
              </button>
            </Link>
          ) : (
            <Link to={"/Login"}>
              <button className="login">Login</button>
            </Link>
          )}
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
