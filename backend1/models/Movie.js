const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    // all the properties of a user
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    img: {
      // big img
      type: String,
    },
    imgTitle: {
      // title img
      type: String,
    },
    imgThumbnail: {
      // movie img
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    year: {
      type: String,
    },
    ageLimit: {
      type: Number,
    },
    genre: {
      type: String,
    },
    isSeries: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
