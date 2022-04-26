import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movieList/MovieList";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/v1/lists${type ? "?type=" + type : ""}${
            genre ? "?genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjI1MjE0MWNjOTRlOWQzNmZlOGIxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDczOTEyMiwiZXhwIjoxNjUxMTcxMTIyfQ.ld2U1nnV9cj3NhGvaaR2ACRes2Ti909isityoN0MVzE ",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <MovieList list={list} />
      ))}
    </div>
  );
};

export default Home;
