const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello World!<h1/>");
});

const port = 8080;

app.listen(port, () => console.log(`💻 Server is running on PORT ${port}!`));
