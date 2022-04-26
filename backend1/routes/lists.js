const express = require("express");
const listRouter = express.Router();
const verify = require("../verifyToken");

const {
  createList,
  getList,
  // getAllList,
  // updateList,
  // deleteList,
} = require("../controllers/lists");

listRouter.route("/").get(verify, getList).post(verify, createList);
// listRouter
//   .route("/:id")
//   .get(verify, getList)
//   .patch(verify, updateList)
//   .delete(verify, deleteList);

module.exports = listRouter;
