// const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
let db = new Sequelize('chat', 'root', '');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// exports.connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

exports.Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});