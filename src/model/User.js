const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minlength: 3,
    required: [true, 'Username is required'],
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    trim: true,
    minlength: 3,
    required: [true, 'Email is required'],
  },
  role: {
    type: Number,
    required: true,
    trim: true,
    default: 1,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
