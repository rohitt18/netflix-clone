const jwt = require("jsonwebtoken");

// so before updateUser, deleteUser,etc the routes will first come here & verify whether the token is valid or not if everything is okay
// we pass it to the next middleware & after this it will run the func updateUser,deleteUser,etc

const verify = async (req, res, next) => {
  // firstly get the jwt

  const authHeader = req.headers.token;

  // if there is token
  if (authHeader) {
    // split
    const token = authHeader.split(" ")[1];

    // verify
    // after verifying it will return an error or Credentials which we call user in this case

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid"); // token is not valid
      // And if there is no err we can assign new req variable here.
      req.user = user;
      next(); // to go to the actual router
    });
  } else {
    // if no token
    return res.status(401).json("You are not authenticated");
  }
};

module.exports = verify;
