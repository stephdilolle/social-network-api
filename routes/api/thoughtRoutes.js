const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
} = require('../../controllers/thoughtControllers');

router.route('/api/thoughts')
  .get(getThoughts)
  .post(createThought);

router.route('/api/thoughts/:thoughtId/reactions')
  .get(getSingleThought)
  .put(updateThought);

module.exports = router;