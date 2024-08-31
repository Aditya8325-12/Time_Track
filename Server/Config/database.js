const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.hdca1.mongodb.net/${process.env.DB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database not connected =>", err);
  });

module.exports = mongoose;
