const { Reaction } = require('../models');

  // create a new reaction
  module.exports = {
  async createReaction(req, res) {
    try {
      const dbReactionData = await Reaction.create(req.body);
      res.json(dbReactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a reaction
  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }
      res.json({ message: 'Reaction deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  }
};