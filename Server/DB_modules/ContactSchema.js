const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require,
  },
  message: String,
  phone: Number,
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const ContactMoodule = mongoose.model("Contact", contactSchema);


module.exports = ContactMoodule;
