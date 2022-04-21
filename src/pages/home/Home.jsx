import React from "react";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movieList/MovieList";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
};

export default Home;
