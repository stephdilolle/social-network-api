const { Thought } = require('../models/thought');

// get all thoughts 
module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err)
    }
  },

  // get one thought by ID
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a thought by ID
async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { username: req.body.username } },
        { new: true }
      );
  
      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought found with that ID' });
      }
  
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  }, 

  // create a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};