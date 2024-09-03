const mongoose = require("../Config/database");
const UserModule = require("../DB_modules/userSchema");
const bycrpt = require("bcrypt");

exports.adduser = async (req, res) => {
  console.log("page hit");
  try {
    const { name, email, password } = req.body;
    if (name !== "" && email !== "" && password !== "") {
      await UserModule(req.body);
      const data = await UserModule.findOne({ email });
      if (data) {
        console.log("secound err");
        res
          .status(400)
          .send({ status: 400, message: "Email is Already Sign In" });
      } else {
        console.log("data insert");
        await UserModule.create({
          name,
          email,
          password,
        })
          .then(() => {
            res
              .status(200)
              .send({ status: 200, message: "user Created succefully " });
          })
          .catch((err) => {
            res.status(400).send({ status: 400, message: err });
          });
      }
    }
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

exports.getUserInfo = async (req, res) => {
  console.log("page hit");
  try {
    const { password, email } = req.body;
    await UserModule(req.body);
    const data = await UserModule.findOne({ email });
    const match = await bycrpt.compare(password, data.password);
    if (match) {
      res.status(200).send({
        message: "Login Succefully",
        data,
        token: await data.genrateToken(),
        userId: data._id.toString(),
      });
    } else {
      res.status(400).send({ message: "pasword does not match" });
    }
  } catch (error) {
    res.status(400).send({ message: "error Fetching data " });
  }
};

exports.deleteuser = (req, res) => {
  res.send("deleteuser page ");
};

exports.updateUser = (req, res) => {
  res.send("updateuser page ");
};

exports.getallUsers = async (req, res) => {
  const data = await UserModule.find();
  res.status(200).send({ data, msg: "data geting succefully " });
};

// geting user information using the token
exports.user = async (req, res) => {
  try {
    userdata = req.user;

    const data = await UserModule.find(
      { email: userdata.email },
      { password: 0 });

    res.status(200).json({
      data,
      message: "data geting succefully",
    });
  } catch (error) {
    next(error);
  }
};
