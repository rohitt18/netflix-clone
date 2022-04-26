import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

// Firstly, split it into 2 parts left will contain the logo,website name & right will contain some icons & profilePicture

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              admin<span>Pannel</span>
            </Link>
          </div>
        </div>
        <div className="topRight">
          <div className="iconContainer">
            <NotificationsNone />
            <span className="iconBadge">2</span>
          </div>
          <div className="iconContainer">
            <Language />
            <span className="iconBadge">2</span>
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
