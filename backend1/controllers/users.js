const User = require("../models/User");
// as we would be updating our password we would need this bcrypt again
const bcrypt = require("bcryptjs");

// UPDATE USER ***

const updateUser = async (req, res) => {
  // we dont need to send any body property i,e we're not gonna verify this by looking into body instead use jwt verify method
  // go to verifyToken to recall
  // jo user details

  // it will check whether we're the owner or we are the admin

  if (req.user.id === req.params.id || req.user.isAdmin) {
    // if the id which the user provides matches to the params.id OR if the user is an admin

    // before updating we must check whether we're updating the password or not

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.id }, // jiska _id req.params.id ke barabar ho
        req.body,
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can update only your account");
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  // it will check whether we're the owner or we are the admin
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(
        { _id: req.params.id } // jiska _id req.params.id ke barabar ho
      );
      return res.status(200).json("User has been deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can delete only your account");
  }
};

// GET A USER
const getUser = async (req, res) => {
  try {
    const user = await User.findById(
      { _id: req.params.id } // jiska _id req.params.id ke barabar ho
    );
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET ALL USERS ( using this we can fetch all the users wherever needed)
const getAllUsers = async (req, res) => {
  //   /?new=true => it will return only the last 10 users

  const query = req.query.new;

  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("you are not allowed");
  }
};

// GET USER STATS (for fetching the user statistics whenever needed -TOTAL USER NUMBER PER MONTH)
const getUserStats = async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUsers, getUserStats };
