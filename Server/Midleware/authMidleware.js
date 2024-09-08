const jwt = require("jsonwebtoken");

const user = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const userdata = jwt.verify(authHeader, process.env.SECRET_KEY);
    req.user = userdata;
    next();
  } catch (error) {
    res.send({ message: "token is invalid " });
  }
};

module.exports = user;
