const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;
