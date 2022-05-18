const Database = require('../models/database.model');
const fs = require('fs');
const backup = require('mongodb-backup');
const restore = require('mongodb-restore');

function create(req, res, next) {
  const fileName = `${new Date().getTime()}.tar`;
  const directory = `${process.cwd()}\\backup\\`;

  backup({
    uri: 'mongodb://localhost:27017/MERN',
    root: directory,
    tar: fileName, // save backup into this tar file
    callback(err, data) {
      if (err) {
        res.status(401).json({ message: `Backup Errror${err}` });
      } else {
        const stats = fs.statSync(directory + fileName);
        const fileSizeInBytes = stats.size;

        // Convert the file size to megabytes (optional)
        const database = new Database({ name: fileName, size: fileSizeInBytes });

        database.save()
          .then((newDatabase) => {
            res.json(newDatabase);
          })
          .catch(next);
      }
    }
  });
}

function restoreDatabase(req, res, next) {
  const fileName = req.database.name;
  const directory = `${process.cwd()}\\backup\\`;
  restore({
    uri: 'mongodb://localhost:27017/MERN',
    root: directory,
    tar: fileName, // restore backup from this tar file
    drop: true,
    callback(err, data) {
      if (err) {
        res.status(401).json({ message: `Restore Errror${err}` });
      } else {
        res.json({ message: 'success' });
      }
    }
  });
}

function list(req, res, next) {
  Database.find({})
    .then((databases) => {
      res.json(databases);
    })
    .catch(next);
}

function remove(req, res, next) {
  const fileName = req.database.name;
  const directory = `${process.cwd()}\\backup\\`;
  req.database.remove()
    .then((removedDatabase) => {
      fs.unlink(directory + fileName, (err) => {
        if (err) throw err;
      });
      res.json(removedDatabase);
    })
    .catch(next);
}

function getDatabaseByID(req, res, next, id) {
  Database.findById(id)
    .then((database) => {
      if (!database) {
        res.status(404).json({ message: 'Database not found' });
        return;
      }

      req.database = database;
      next();
    })
    .catch(next);
}

module.exports = {
  create,
  list,
  remove,
  restoreDatabase,
  getDatabaseByID,
};
