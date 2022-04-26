import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  List,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <li className="listItem ">
                <LineStyle className="Icon" /> Home
              </li>
            </Link>
            <li className="listItem">
              <Timeline className="Icon" /> Analytics
            </li>
            <li className="listItem">
              <TrendingUp className="Icon" /> Sales
            </li>
          </ul>
        </div>
        {/* lets create more menus */}
        <div className="sidebarMenu">
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link
              to="/users"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="listItem ">
                <PermIdentity className="Icon" /> Users
              </li>
            </Link>
            <Link
              to="/movies"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="listItem">
                <PlayCircleOutline className="Icon" /> Movies
              </li>
            </Link>
            <Link
              to="/lists"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li className="listItem">
                <List className="Icon" /> Lists
              </li>
            </Link>
            <li className="listItem">
              <BarChart className="Icon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li className="listItem ">
              <MailOutline className="Icon" /> Mail
            </li>
            <li className="listItem">
              <DynamicFeed className="Icon" /> Feedback
            </li>
            <li className="listItem">
              <ChatBubbleOutline className="Icon" /> Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="title">Staff</h3>
          <ul className="list">
            <li className="listItem ">
              <WorkOutline className="Icon" /> Manage
            </li>
            <li className="listItem">
              <Timeline className="Icon" /> Analytics
            </li>
            <li className="listItem">
              <Report className="Icon" /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
