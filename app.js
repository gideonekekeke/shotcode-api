const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 6000;
const url =
  "mongodb+srv://giddy:BqGOcPI8FD0DL2K7@cluster0.7rupp.mongodb.net/shotcodeDB?retryWrites=true&w=majority";

const app = express();

// connecting to the data base

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());
app.use(cors());
const name = require("./Route/Router");

app.use("/", name);

app.listen(port, () => {
  console.log("listening on port");
});
