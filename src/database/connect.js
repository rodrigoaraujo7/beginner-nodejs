const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:<password>@beginner-nodejs-course.zdeaw.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        return console.log("Error to connect a database:", error);
      }

      return console.log("Database connection successfully");
    }
  );
};

module.exports = connectToDatabase;
