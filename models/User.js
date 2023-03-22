const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
    },
    thoughts: [      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },],
    friends: [      {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
