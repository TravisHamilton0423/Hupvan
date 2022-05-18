const UserModel = require('../models/user.model');

function create(req, res, next) {
  const newUser = new UserModel(req.body);

  UserModel.findOne({ username: req.body.username })
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

function update(req, res, next) {
  Object.assign(req.userModel, req.body);

  req.userModel.save()
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch(next);
}

function read(req, res) {
  res.json(req.userModel);
}


function list(req, res, next) {
  let query = {};

  if (req.body.action
    && !!req.body.action.department
    && req.body.action.department !== '전체') {
    query = {
      department: req.body.action.depart
    };
  }

  UserModel.find(query)
    .sort({ fullname: 1, status: -1 })
    .populate({ path: 'employee_id', select: 'liveAddress ability phone department cardNumber birthday sex position party' })
    .exec()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
}

function remove(req, res, next) {
  req.userModel.remove(() => {
    res.json(req.userModel);
  })
    .catch(next);
}

function getUserByID(req, res, next, id) {
  UserModel.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      req.userModel = user;
      next();
    })
    .catch(next);
}

function getProfile(req, res, next) {
  req.user = req.body;
  UserModel.findById(req.user._id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }

      req.userModel = user;
      next();
    })
    .catch(next);
}

module.exports = {
  create,
  update,
  read,
  list,
  remove,
  getUserByID,
  getProfile,
};
