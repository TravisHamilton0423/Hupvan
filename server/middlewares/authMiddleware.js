const jwt = require('jsonwebtoken');

const config = require('../config');
const User = require('../api/models/user.model.js');

module.exports = function (req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(403).send({
      message: 'No Token Provided'
    });
  }

  const role = auth.split('?')[0];
  const token = auth.split('?')[1];

  // decode token
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(403).send({
          message: 'Failed to authenticate token'
        });
      }
      req.user = decoded;
      User.findOne({ _id: req.user._id }).then((user) => {
        if (!user) {
          return res.status(403).send({
            message: '사용자가 존재하지 않습니다.',
          });
        }

        next();
      })
        .catch(() => {
          console.log('>>[DBG] login failed! User info:', req.user);
        });
    });
  } else {
    return res.status(403).send({
      message: 'No Token Provided'
    });
  }
};
