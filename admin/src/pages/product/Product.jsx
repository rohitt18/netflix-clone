import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

const Product = () => {
  const location = useLocation();
  // console.log(location);
  const movie = location.state.movie;
  // console.log(movie);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newProduct">
          <button>Create</button>
        </Link>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <img className="productTopRightImg" src={movie.img} alt="" />
            <span>{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productBottomItem">
              <span>id:</span>
              <span className="productInfoItemValue">{movie._id}</span>
            </div>
            <div className="productBottomItem">
              <span>genre:</span>
              <span className="productInfoItemValue">{movie.genre}</span>
            </div>
            <div className="productBottomItem">
              <span>year:</span>
              <span className="productInfoItemValue">{movie.year}</span>
            </div>
            <div className="productBottomItem">
              <span>Age limit:</span>
              <span className="productInfoItemValue">{movie.ageLimit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productBottomInfo ">
            <label>Movie Title</label>
            <input
              className="productBottomInput"
              type="text"
              placeholder={movie.title}
            />
            <label>Year</label>
            <input
              type="text"
              className="productBottomInput"
              placeholder={movie.year}
            />
            <label>Genre</label>
            <input
              type="text"
              className="productBottomInput"
              placeholder={movie.genre}
            />
            <label>Age Limit</label>
            <input
              type="text"
              className="productBottomInput"
              placeholder={movie.ageLimit}
            />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
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
            <img
              style={{ position: "relative", left: "80px", top: "10px" }}
              className="productUploadImg"
              src={movie.img}
              alt=""
            />
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

export default Product;
