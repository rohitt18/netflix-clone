const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // all the properties of a user
    username: {
      type: String,
      required: [true, "Please enter your Username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your Password"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
