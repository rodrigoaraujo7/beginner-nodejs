const fs = require("fs");
const path = require("path");

// Create folder - create a folder on modules with a test name and give me a callback!
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error:", error);
  }

  console.log("Folder created successfully!");
});

// Create file - create a file on a different directory with a content and give me a callback!
fs.writeFile(
  path.join(__dirname, "/test", "app.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log("File created successfully!");

    // Add content to a file - adding content to an existing file without deleting the old content!
    fs.appendFile(
      path.join(__dirname, "/test", "app.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Error:", error);
        }

        console.log("Content added successfully!");
      }
    );

    // Read file
    fs.readFile(
      path.join(__dirname, "/test", "app.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Error:", error);
        }

        console.log(data);
      }
    );
  }
);
