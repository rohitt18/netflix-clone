const Movie = require("../models/Movie");

// CREATE MOVIE
const createMovie = async (req, res) => {
  // if(!title){
  //   rerutn res.status(400).json("Please provide title")
  // }
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.create(req.body);
      return res.status(201).json(movie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed");
  }
};

// UPDATE MOVIE
const updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).json(movie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed");
  }
};

// DELETE MOVIE
const deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete({ _id: req.params.id });
      return res.status(200).json("Movie has been deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed");
  }
};

// GET MOVIE
const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById({ _id: req.params.id });
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET RANDOM
const getRandom = async (req, res) => {
  const type = req.query.type; //   /random?type=series
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        // here im gonna find a series
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
        // this means it will find all series and just return a sample
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET ALL MOVIE
const getAllMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find({});
      return res.status(200).json(movies.reverse());
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed");
  }
};

module.exports = {
  createMovie,
  getMovie,
  getAllMovie,
  updateMovie,
  deleteMovie,
  getRandom,
};
