const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    min: 5,
  },

  picture: {
    type: String,
  },
});

module.exports = mongoose.model("Teachers", mySchema);
