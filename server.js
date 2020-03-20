const express = require("express");
const helmet = require("helmet");

const stuff = require("./api/router")

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/", stuff);


server.get("/", (req, res) => {
  res.status(200).json({ message: "UP AND RUNNING" });
});

module.exports = server;
