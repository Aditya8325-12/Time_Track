const UserModule = require("./userSchema");

const userperMont = async () => {
  return await UserModule.aggregate([
    {
      $match: {},
    },
    {
      $group: {
        _id: {
          year: {
            $year: "$createDate",
          },
          month: {
            $month: "$createDate",
          },
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: { "_id.year": 1, "_id.month": 1 },
    },
  ]);
};

module.exports = userperMont;
