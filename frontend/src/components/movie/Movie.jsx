import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./movie.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  // console.log(item);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/api/v1/movies/movie/` + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjI1MjE0MWNjOTRlOWQzNmZlOGIxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDczOTEyMiwiZXhwIjoxNjUxMTcxMTIyfQ.ld2U1nnV9cj3NhGvaaR2ACRes2Ti909isityoN0MVzE ",
          },
        });
        // console.log(res.data);
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={"/playMovie"} state={{ movie }}>
      <div
        className="movie"
        style={{ left: isHovered && index * 240 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgThumbnail} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>
            <div className="movieInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="movieInfoTop">
                <span>{movie.duration}</span>
                <span className="ageLimit">+{movie.ageLimit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Movie;
