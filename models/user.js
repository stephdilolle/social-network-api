const { Schema, model } = require('mongoose');
const { Thought } = require('./thought.js');

// Define the user schema using a function
const createUserSchema = () => {
  const userSchema = new Schema(
    {
      username: { type: String, required: true, unique: true, trim: true },
      email: { type: String, required: true, unique: true },
      thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
      friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
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

  return userSchema;
};

// Initialize the User model
const User = model('User', createUserSchema());

module.exports = User;