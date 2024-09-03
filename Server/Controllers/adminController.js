const UserModule = require("../DB_modules/userSchema.js");

exports.allUserData = async (req, res) => {
  try {
    const data = await UserModule.find({ isAdmin: 0 });
    console.log("data", data);
    res.status(200).json({ message: "data getting succefull  ", data });
  } catch (error) {
    res.status(400).json({ message: "server Error " });
  }
};
