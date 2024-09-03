require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("./Config/database.js");
const routes = require("./Routes/userRoutes.js");
const adminRoutes = require("./Routes/adminRoutes.js");
const errorHandler = require("./ErrorMidleware/errorMidleware.js");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/admin", adminRoutes);


app.use("/", routes);
app.use("/admin", adminRoutes);

app.use(errorHandler);
module.exports = app;
