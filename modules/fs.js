const fs = require("fs");
const path = require("path");

// Create folder - create a folder on modules with a test name and get me a callback
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error:", error);
  }

  console.log("Folder created successfully!");
});
