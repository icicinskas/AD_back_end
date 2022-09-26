const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./router/mainRouter");
require("dotenv").config();

const http = require("http").createServer(app);
const socket = require("socket.io");
const io = socket(http, { cors: { origin: "http://localhost:3000" } });

io.on("connect", (socket) => {
  console.log("socket connected");
});

app.use(cors());

http.listen(4000);

mongoose
  .connect(process.env.MONGO_KEY)
  .then((res) => {
    console.log("CONNECTED");
  })
  .catch((e) => {
    console.log("ERROR");
  });

app.use(express.json());
app.use("/", mainRouter);
