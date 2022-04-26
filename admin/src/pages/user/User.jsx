import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Users</h1>
        <Link to="/newUser">
          <button className="userButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userTop">
            <div className="userTopLeft">
              <img
                className="userTopImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </div>
            <div className="userTopRight">
              <span className="userTopRightUsername">Jennifer Winget</span>
              <span className="userTopRightJobTitle">Software Engineer</span>
            </div>
          </div>

          <div className="userBottom">
            <span className="userBottomTitle">Account Details</span>
            <div className="accountDetailItem">
              <PermIdentity className="userBottomIcon" />
              <span className="userBottomUsername">iamjennifer</span>
            </div>
            <div className="accountDetailItem">
              <CalendarToday className="userBottomIcon" />
              <span className="userBottomUsername">18.02.2001</span>
            </div>
            <span className="userBottomTitle">Contact Details</span>
            <div className="accountDetailItem">
              <PhoneAndroid className="userBottomIcon" />
              <span className="userBottomUsername">+91 9082220117</span>
            </div>
            <div className="accountDetailItem">
              <MailOutline className="userBottomIcon" />
              <span className="userBottomUsername">jennifer@gmail.com</span>
            </div>
            <div className="accountDetailItem">
              <LocationSearching className="userBottomIcon" />
              <span className="userBottomUsername">Mumbai</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="iamjennifer"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Jennifer Winget"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="jennifer@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="+91 9082220117"
                />
              </div>
              <div className="userUpdateItem">
                <label>City</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Mumbai"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateRightUploadImg">
                <img
                  className="userUpdateRightImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateRightButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
