const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "**First Name Required**"],
    minlength: [2, "**Name Length Must Be 2 Characters or More**"]
  },
  lastName: {
    type: String,
    required: [true, "**Last Name Required**"],
    minlength: [2, "**Name Length Must Be 2 Characters or More**"]
  },
  email: {
    type: String,
    validate: {
      validator: function(email) {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/
        return regex.test(email);
      },
      message: props => `**${props.value} Is Not A Valid Email!**`
    },
    required: [true, "**Email Required**"]
  },
  age: {
    type: Number,
    required: [true, "**Age Required**"],
    min: [18, `**Must Be 18 Or Older, You Entered {VALUE} Year(s) Old**`]
  },
  gender: {
    type: String,
    required: [true, "**Gender Required**"],
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