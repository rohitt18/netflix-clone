import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./featured.scss";
import axios from "axios";

const Featured = ({ type, setGenre }) => {
  // passing type as a prop

  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/api/v1/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjI1MjE0MWNjOTRlOWQzNmZlOGIxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDczOTEyMiwiZXhwIjoxNjUxMTcxMTIyfQ.ld2U1nnV9cj3NhGvaaR2ACRes2Ti909isityoN0MVzE ",
          },
        });
        // console.log(res.data[0]);
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {/* if there is a type like series or movies we're gonna see this information also */}

      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        // img (bigImg)
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          // imgTitle
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
