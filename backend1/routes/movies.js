const express = require("express");
const movieRouter = express.Router();
const verify = require("../verifyToken");

const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getRandom,
  getAllMovie,
} = require("../controllers/movies");

movieRouter.route("/").get(verify, getAllMovie).post(verify, createMovie);
movieRouter
  .route("/:id")
  .patch(verify, updateMovie)
  .delete(verify, deleteMovie);
movieRouter.route("/movie/:id").get(verify, getMovie);
movieRouter.route("/random").get(verify, getRandom);

module.exports = movieRouter;
