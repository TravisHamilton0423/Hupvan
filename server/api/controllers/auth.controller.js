const jwt = require('jsonwebtoken');
const config = require('../../config');
const moment = require('moment');
const User = require('../models/user.model');

function generateToken(data) {
  return jwt.sign(
    data,
    config.jwtSecret,
    { expiresIn: config.jwtExpires }
  );
}

function login(req, res, next) {
  User.findOne({ username: req.body.username })
    .select('_id password')
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(500).json({ message: 'Username does not match' });
      }
      if (user.password !== req.body.password) {
        return res.status(500).json({ message: 'Password is wrong' });
      }
      const exp = moment().add(1, 'days');
      const jwtToken = generateToken(user._doc);
      return res.json({
        id: user._id,
        username: user.username,
        avatar: user.avatar,
        token: jwtToken,
        exp
      });
    })
    .catch(next);
}

function signup(req, res, next) {
  const newUser = new User(req.body);

  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        return res.status(500).json({ message: 'That user name is already exist' });
      }
      newUser.save()
        .then((created) => {
          res.json(created);
        })
        .catch(next);
    })
    .catch(next);
}

module.exports = {
  login,
  signup,
};
