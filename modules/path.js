const path = require("path");

// File name
console.log(path.basename(__filename));

// Folder name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Path object
console.log(path.parse(__filename));

// Join file paths
console.log(path.join(__dirname, "new folder", "app.html"));
