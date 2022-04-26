import axios from "axios";
import {
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  createMovieStart,
  createMovieSuccess,
  createMovieFailure,
} from "./MovieActions";

// get

export const getMovies = async (dispatch) => {
  // here we will dispatch our actions

  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/api/v1/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// create
export const createMovie = async (movie, dispatch) => {
  // here we will dispatch our actions
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/api/v1/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

// delete
export const deleteMovie = async (id, dispatch) => {
  // here we will dispatch our actions

  dispatch(deleteMovieStart());
  try {
    await axios.delete("/api/v1/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};

// update
