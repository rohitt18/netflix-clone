const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    // all the properties of a user
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      // it can be a movie or a series
      type: String,
    },
    genre: {
      type: String,
    },
    content: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
