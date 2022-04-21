import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./playMovie.scss";
import video from "./video/video.mp4";
import Video from "./video/Furious7.mp4";
import F9 from "./video/F9.mp4";

const PlayMovie = () => {
  return (
    <div className="playMovie">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src={Video} />
    </div>
  );
};

export default PlayMovie;
