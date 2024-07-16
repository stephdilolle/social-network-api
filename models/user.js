const { Schema, model } = require('mongoose');
const { Thought } = require('./thought.js');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true }, // Fixed unique, trimmed properties
    email: { type: String, required: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], // Reference to the Thought model
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Self-reference to User model
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model('User', userSchema);

module.exports = User;