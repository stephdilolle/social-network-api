const { Schema, model } = require('mongoose');

// Define the user schema using a function
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

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;