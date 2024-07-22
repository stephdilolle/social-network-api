const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');

router.route('/api/users')
  .get(getUsers)
  .post(createUser);

router.route('/api/users/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;