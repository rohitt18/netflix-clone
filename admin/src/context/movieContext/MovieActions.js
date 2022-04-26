export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
  // after fetching data its gonna give us movies
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const createMovieStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
  // after creation its gonna give us movie
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
  // And we're gonna take this movie & add to our movies state
  // it already contains our all movies and we're gonna add 1 more movie
});

export const createMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

export const updateMovieStart = () => ({
  type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
  // after updating its gonna give us movie
  type: "UPDATE_MOVIE_SUCCESS",
  payload: movie,
  // And we're gonna take this movie & add to our movies state
  // it already contains our all movies and we're gonna add 1 more movie
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

// so how am i gonna delete any movie here?
// When i click the del button we wanna take that specific movie id & we're gonna try to remove it from out movies array
// therefore id instead of movie
export const deleteMovieSuccess = (id) => ({
  // after fetching data its gonna give us movies
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
