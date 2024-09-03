const jwt = require("jsonwebtoken");

const user = async (req, res, next) => {
  try {
    // const data = req.headers("Authorization");
    const authHeader = req.headers["authorization"];

    // const token = authHeader.replace("aditya ", "");

    const userdata = jwt.verify(authHeader, process.env.SECRET_KEY);
    console.log("user token data == ", userdata);
    req.user = userdata;
    next();
  } catch (error) {
    res.send({ message: "token is invalid " });
  }
};

module.exports = user;
