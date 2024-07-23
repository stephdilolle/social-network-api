const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
} = require('../../controllers/thoughtControllers');

router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId/reactions')
  .get(getSingleThought)
  .put(updateThought);

module.exports = router;