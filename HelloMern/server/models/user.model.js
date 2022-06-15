const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "**First Name Required**"],
    minlength: [2, "**Name Length Must Be 2 Characters or More"]
  },
  lastName: {
    type: String,
    required: [true, "**Last Name Required**"],
    minlength: [2, "**Name Length Must Be 2 Characters or More"]
  },
  email: {
    type: String,
    required: [true, "**Email Required**"]
  },
  age: {
    type: Number,
    required: [true, "**Age Required**"],
    min: [18, "**Must Be 18 Or Older**"]
  },
  gender: {
    type: String,
    required: [true, "**gender Required**"],
    enum: [
      "Female",
      "Male",
      "Other",
      "Undeclared"
    ]
  },
  profileImage: {
    type: String
  }
}, {timestamps: true})
const User = mongoose.model("User", UserSchema);
module.exports = User;