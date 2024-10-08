
const bycrpt = require("bcrypt");
const mongoose = require("../Config/database");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  createDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltrounds = 5;
    user.password = await bycrpt.hash(user.password, saltrounds);
  } catch (error) {
    next(error);
  }
});

userSchema.methods.genrateToken = async function () {
  try {
    const user = this;
    console.log("jwt is admin", user.isAdmin);

    return jwt.sign(
      {
        user_id: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const UserModule = new mongoose.model("User", userSchema, "Users");

module.exports = UserModule;
