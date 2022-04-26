import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./navbar.scss";
import rohit from "../../images/Rohit.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // basically this will listen our scroll on the window whenever we scroll the application its gonna run this func
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    // clean up func otherwise it will be a loop
    return () => (window.onscroll = null);
  };

  //   console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link
            to="/"
            className="link"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <span>Homepage</span>
          </Link>

          <Link
            to="/series"
            className="link"
            onClick={() => {
              window.location.href = "/series";
            }}
          >
            <span>Series</span>
          </Link>

          <Link
            to="/movies"
            className="link"
            onClick={() => {
              window.location.href = "/movies";
            }}
          >
            <span>Movies</span>
          </Link>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="Icon" />
          <span>KID</span>
          <Notifications className="Icon" />
          <img src={rohit} alt="" />
          <div className="dropDownContainer">
            <ArrowDropDown className="Icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
