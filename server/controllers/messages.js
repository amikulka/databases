var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll()
      .then((results) => {
        db.close();
        res.send(results);
      })
      .catch((err) => {
        db.close();
        console.error(err);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body)
      .then(() => {
        db.close();
        res.send();
      })
      .catch((err) => {
        db.close();
        console.error(err);
      });
  } // a function which handles posting a message to the database
};
