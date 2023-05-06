const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  login
  // deleteUser,
  // addFriend,
  // deleteFriend
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

router.route("/login").post(login)

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  // .delete(deleteUser);
  

// router
//   .route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(deleteFriend)
module.exports = router;
