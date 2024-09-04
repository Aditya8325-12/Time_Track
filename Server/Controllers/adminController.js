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

exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const data = await UserModule.deleteOne({ _id })
      .then(() => {
        res.status(200).json({ message: "data getting succefull  ", data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } catch (error) {
    res.status(400).json({ message: "server Error " });
  }
};
