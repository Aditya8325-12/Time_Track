const UserModule = require("../DB_modules/userSchema.js");
const ContactMoodule = require("../DB_modules/ContactSchema.js");
const userperMont = require("../DB_modules/aggregatesfunction.js");
exports.allUserData = async (req, res) => {
  try {
    const data = await UserModule.find({ isAdmin: 0 }).limit(6);

    res.status(200).json({ message: "data getting succefull  ", data });
  } catch (error) {
    res.status(400).json({ message: "server Error " });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.body;

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

exports.updateuser = async (req, res) => {
  try {
    const { name, email, _id } = req.body;
    await UserModule.updateOne({ _id }, { $set: { name, email } })
      .then(() => {
        res.status(200).json({ message: "data getting succefull updataed  " });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } catch (error) {
    res.status(400).json({ message: "server Error Data not updated " });
  }
};

exports.gettotalusersInfo = async (req, res) => {
  try {
    // get total user
    const totaluser = await UserModule.countDocuments({ isAdmin: 0 });

    // getuserper month data
    const userperMonth = await userperMont();

    //get current month total user

    const currentDate = new Date();
    const fsdate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lsdate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );

    const newuserthisMonth = await UserModule.countDocuments({
      createDate: {
        $gte: fsdate,
        $lte: lsdate,
      },
      isAdmin: 0,
    });

    res.status(200).json({
      message: "data getting succefull  ",
      totaluser,
      userperMonth,
      newuserthisMonth,
    });
  } catch (error) {
    res.status(400).json({ message: "server Error " });
  }
};

exports.DeleteContact = async (req, res) => {
  const { _id } = req.body;
  await ContactMoodule.deleteOne({ _id })
    .then((response) => {
      res.status(200).json({ message: "query  has been deleted " });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "data  not deleted some server issue  " });
    });
};

exports.getAllContact = async (req, res) => {
  await ContactMoodule.find()
    .then((response) => {
      res
        .status(200)
        .json({ message: "succefuly get the data  ", data: response });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
