const User = require('../models/User');
const {signToken} = require("../utils/auth")

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
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
    console.log(req.body)
    User.create(req.body)
      .then((dbUserData) => {
        console.log(dbUserData)
        const token = signToken(dbUserData)
        !dbUserData
          ? res.status(400).json({ message: 'Something is wrong!' })
          : res.json( { token, dbUserData} )
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  //login a user, sign a token, and send it back 
  async login(req, res) {
    console.log(req.body)
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }

    console.log("logged in!")
    const token = signToken(user);

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user._id

      console.log("session saved!")

      res.json({ token, user });
    })

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
