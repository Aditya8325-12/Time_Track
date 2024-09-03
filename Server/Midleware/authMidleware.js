const jwt = require("jsonwebtoken");

const user = async (req, res, next) => {
  try {
    const data = req.header("Authorization");
    const token = data.replace("aditya ", "");

    const userdata =  jwt.verify(token, process.env.SECRET_KEY);

    req.user = userdata;
    next();
  } catch (error) {
    res.senf({ message: "token is invalid " });
  }
};

module.exports = user;
