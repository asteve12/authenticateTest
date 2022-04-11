const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: ["user", "moderator", "admin"]
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  profileUrl: {
    type: String
  }
})

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ username: this.username, _id: this._id, email: this.email, role: this.role, profileUrl: this.profileUrl }, "password 123")
  return token;
}
const User = mongoose.model('User', userSchema);

exports.User = User;
exports.userSchema = userSchema;
