var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll()
      .then((results) => {
        res.send(results);
      });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body)
      .then(() => {
        res.send();
      });
  } // a function which handles posting a message to the database
};
