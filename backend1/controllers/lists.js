const List = require("../models/List");

// CREATE LIST
const createList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await List.create(req.body);
      res.status(201).json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

// DELETE LIST
const deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete({ _id: req.params.id });
      res.status(201).json("The list has been delete...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
};

// GET LIST
const getList = async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    // if we choose only movie & genre-Crime then we will get only those type of movies
    // in short typeQuery = "movies"/"series" & genreQuery = "Crime"/"Horror"
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } // and if there is no typeQuery that means the user is in the home page & has not clicked movies or series
    // therefore it will return random samples
    else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const getAllList = async (req, res) => {};
// const updateList = async (req, res) => {};

module.exports = { createList, getList, deleteList };
