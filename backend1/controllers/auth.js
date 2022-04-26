const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json("Please enter username, email & password ");
    }
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({ ...req.body, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// LOGIN
const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json("Please enter username & password");
  }
  try {
    // find the user
    const user = await User.findOne({ email: req.body.email });

    // if not
    if (!user) {
      return res.status(400).json("Invalid credentials");
    }

    // if exists then compare the password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    // if not
    if (!isCorrect) {
      return res.status(400).json("Invalid credentials");
    }

    // once the user logins the token is created
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    // so basically this will hide the following information inside this token

    // we dont wanna show the password
    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken }); // so now we'll pass this accesstoken along with all other info
  } catch (error) {
    return res.status(500).json(error);
  }
};

// JWT -

// for secure authentication ill create a jwt now which will contain our userId & isAdmin property which is already in our User Model
// so therefore we dont need to send any body property, we just send our jwt which no one can create but us when a user login
// & we just compare this jwt whether its valid or not if it is we'll check the userId with the userId
// or if the admin is creating any movie/list, it will check the whether we are an admin or not & accordingly it will allow us to do this process

module.exports = { register, login };
