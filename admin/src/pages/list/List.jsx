import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";

const List = () => {
  const location = useLocation();
  // console.log(location);
  const list = location.state.list;
  // console.log(movie);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button>Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span>{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productBottomItem">
              <span>id:</span>
              <span className="productInfoItemValue">{list._id}</span>
            </div>
            <div className="productBottomItem">
              <span>genre:</span>
              <span className="productInfoItemValue">{list.genre}</span>
            </div>
            <div className="productBottomItem">
              <span>type:</span>
              <span className="productInfoItemValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productBottomInfo ">
            <label>List Title</label>
            <input
              className="productBottomInput"
              type="text"
              placeholder={list.title}
            />
            <label>Year</label>
            <input
              type="text"
              className="productBottomInput"
              placeholder={list.type}
            />
            <label>Genre</label>
            <input
              type="text"
              className="productBottomInput"
              placeholder={list.genre}
            />
            <label style={{ marginTop: "15px" }}>Active</label>
            <select productBottomInput name="active" id="active">
              <option className="productBottomInput" value="yes">
                Yes
              </option>
              <option className="productBottomInput" value="no">
                No
              </option>
            </select>
          </div>
          <div className="productBottomUpload">
            <label
              style={{
                position: "relative",
                left: "80px",
                bottom: "25px",
                cursor: "pointer",
              }}
              for="file"
            >
              <Publish />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
            <button
              className="productUploadButton"
              style={{
                position: "relative",
                top: "200px",
                right: "20px",
                padding: "5px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "darkblue",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
