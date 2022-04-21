import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import Movie from "../movie/Movie";
import "./movieList.scss";

const MovieList = () => {
  const [slideNumber, setSlideNumber] = useState(false);
  const [isMoved, setIsmoved] = useState(0);

  const movieItemRef = useRef();

  const handleClick = (direction) => {
    setIsmoved(true);
    // w=240px & margin=5px
    // total = 245px
    // therefore when we click the arrow button it should move 245px
    let distance = movieItemRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      // i would want to move the movieItemWrapper by 245 px to the left
      // but how do i call the movieItemWrapper? i dont wanna use getElementById or querySelector
      // to select the movieItemWrapper ill use useRef hook
      movieItemRef.current.style.transform = `translateX(${245 + distance}px)`;
    }
    // console.log(distance);
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      movieItemRef.current.style.transform = `translateX(${-245 + distance}px)`;
    }
  };

  return (
    <div className="movieList">
      <span className="movieListTitle">Continue to watch</span>
      <div className="movieListWrapper">
        <ArrowBackIosNewOutlined
          className="Icon left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="movieItemWrapper" ref={movieItemRef}>
          <Movie index={0} />
          <Movie index={1} />
          <Movie index={2} />
          <Movie index={3} />
          <Movie index={4} />
          <Movie index={5} />
          <Movie index={6} />
          <Movie index={7} />
          <Movie index={8} />
          <Movie index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="Icon right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;
