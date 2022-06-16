const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello World!<h1/>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
  ];

  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const user = UserModel.create(req.body);

  res.status(201).json(user);
});

const port = 8080;

app.listen(port, () => console.log(`💻 Server is running on PORT ${port}!`));
