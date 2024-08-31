const mongoose = require("../Config/database");
const userSchema = require("../DB_modules/userSchema");

exports.adduser = async (req, res) => {
  console.log("page hit");
  try {
    const { name, email, password } = req.body;
    if (name !== "" && email !== "" && password !== "") {
      const User = await mongoose.model("User", userSchema, "Users");
      const data = await User.find({ email });
      if (data.length > 0) {
        console.log("secound err");
        res
          .status(400)
          .send({ status: 400, message: "Email is Already Sign In" });
      } else {
        console.log("data insert");
        await User.insertMany([
          {
            name,
            email,
            password,
          },
        ])
          .then(() => {
            res
              .status(200)
              .send({ status: 200, message: "user Created succefully " });
          })
          .catch((err) => {
            console.log("thired error ");
            res.status(400).send({ status: 400, message: err });
          });
      }
    }
  } catch (error) {
    console.log("1 st end");
    res.status(400).send({ status: 400, message: error });
  }
};
exports.getUserInfo = async (req, res) => {
  console.log("page hit");
  try {
    const { password, email } = req.body;
    const User = await mongoose.model("User", userSchema, "Users");
    const data = await User.find({ email, password });
    if (data.length > 0) {
      res.status(200).send({ message: "Login Succefully", data });
    } else {
      res.status(400).send({ message: "Email and Password Does not match" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
exports.deleteuser = (req, res) => {
  res.send("deleteuser page ");
};
exports.updateUser = (req, res) => {
  res.send("updateuser page ");
};
exports.getallUsers = (req, res) => {
  res.send("getall user page ");
};
