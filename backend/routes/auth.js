const express = require("express");
const authRouter = express.Router();

const { register, login } = require("../controllers/auth");

// REGISTER
authRouter.route("/register").post(register);

// LOGIN
authRouter.route("/login").post(login);

module.exports = authRouter;
