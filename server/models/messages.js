const db = require('../db');
const Message = db.Message;


module.exports = {
  getAll: function () {
    return Message.sync()
      .then(() => {
        return Message.findAll();
      });

    // return new Promise((resolve, reject) => {
    //   db.connection.query(
    //     'SELECT * FROM messages',

    //     // SELECT users.username, messages.message_text, messages.roomname FROM users INNER JOIN messages
    //     //WHERE user.id = messages.user_id
    //     function(err, results) {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(results.reverse());
    //       }
    //     }
    //   );
    // });
  }, // a function which produces all the messages
  create: function (msg) {

    return Message.sync()
      .then(() => {
        return Message.create(msg);
      });

    // return new Promise((resolve, reject) => {
    //   db.connection.query(
    //     'INSERT INTO `messages` VALUE(null, ? , ?, ?)',
    //     [msg.username, msg.text, msg.roomname],
    //     function(err, results) {

    //       if (err) {
    //         reject(err);

    //       } else {

    //         resolve(results);

    //       }
    //     }
    //   );
    // });

  } // a function which can be used to insert a message into the database
};
