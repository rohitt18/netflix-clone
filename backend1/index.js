require("dotenv").config();
const colors = require("colors");
const express = require("express");
const app = express();

const connectDB = require("./db/connectDB");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/lists", listRouter);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(5000, console.log(`Server is Running on ${PORT}`.yellow));
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
