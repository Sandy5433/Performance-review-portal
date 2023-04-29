const User = require('../models/user');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        console.log(dbUserData)
        res.json(dbUserData)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  //update user details
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //delete user by user ID
  // deleteUser(req, res) {
  //   User.findOneAndRemove({ _id: req.params.userId })
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: 'No user with this id!' })
  //         : Thought.deleteMany({ _id: { $in: user.thoughts } })
  //         )
  //         .then(() => res.json({ message: 'User and thoughts deleted!' }))
  //         .catch((err) => {
  //           console.log(err)
  //           res.status(500).json(err)
  //         });
  // }
};
