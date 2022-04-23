const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    },
    console.log("Successfully connected to MongoDB".cyan)
  );
};

module.exports = connectDB;
