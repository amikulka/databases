const db = require('../db');


module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.connection.query(
        'SELECT * FROM messages',
        function(err, results) {
          if (err) {
            reject(err);
          } else {
            resolve(results.reverse());
          }
        }
      );
    });
  }, // a function which produces all the messages
  create: function (msg) {
    return new Promise((resolve, reject) => {
      db.connection.query(
        'INSERT INTO `messages` VALUE(null, ? , ?, ?)',
        [msg.username, msg.text, msg.roomname],
        function(err, results) {

          if (err) {
            reject(err);

          } else {

            resolve(results);

          }
        }
      );
    });

  } // a function which can be used to insert a message into the database
};
