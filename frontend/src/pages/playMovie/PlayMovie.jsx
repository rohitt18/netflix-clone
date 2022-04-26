import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./playMovie.scss";
import video from "./video/video.mp4";
import Video from "./video/Furious7.mp4";
import F9 from "./video/F9.mp4";
import { Link, useLocation } from "react-router-dom";

const PlayMovie = () => {
  const location = useLocation();

  console.log(location);
  const movie = location.state.movie;
  console.log(movie);
  return (
    <div className="playMovie">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
};

export default PlayMovie;
