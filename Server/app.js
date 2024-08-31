require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("./Config/database.js");
const routes = require("./Routes/userRoutes.js");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

module.exports = app;
