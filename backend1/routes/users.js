const express = require("express");
const userRouter = express.Router();
const verify = require("../verifyToken");

const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} = require("../controllers/users");

userRouter.route("/:id").patch(verify, updateUser).delete(verify, deleteUser);
userRouter.route("/user/:id").get(getUser);
//    / => we will get all the users
//    /?new=true => it will return only the last 10 users
userRouter.route("/").get(verify, getAllUsers);
userRouter.route("/stats").get(getUserStats);

module.exports = userRouter;
