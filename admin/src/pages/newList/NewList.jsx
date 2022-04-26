// List Model -
// title
// type
// genre
// content (in which we have the movies id)

import React, { useContext, useEffect, useState } from "react";
import "./newList.css";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";

const NewList = () => {
  const [list, setList] = useState(null);

  // for redirecting to the list page after creation of list
  const history = useHistory();

  const { dispatch } = useContext(ListContext);
  // would need MovieContext also bec we're gonna choose our movies to add in our list
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  // ek useState se multiple inputs update karne ke liye
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  // console.log(list);

  const handleSelect = (e) => {
    e.preventDefault();
    // console.log(e.target.selectedOptions); // this gives us HTMLCollection & for each option we're getting this HTMLElement
    // so to prevent this we can create an array w this HTML items & im gonna take their values
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    // console.log(value);
    // so once we have the values which is movie Id's then we can set our List
    setList({ ...list, [e.target.name]: value });
  };
  console.log(list);

  // func for sending to DB
  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "260px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewList;
