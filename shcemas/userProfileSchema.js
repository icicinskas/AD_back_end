const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    min: 18,
    max: 65,
    required: true,
  },

  image: [
    {
      type: String,
      require: false,
      default:
        "https://www.innovaxn.eu/wp-content/uploads/blank-profile-picture-973460_1280.png",
    },
  ],

  id: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("regUser", user);
