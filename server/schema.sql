CREATE DATABASE chat;

USE chat;

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(20)
);

CREATE TABLE rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roomname VARCHAR(20)

);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  message_text VARCHAR(255),
  username_id INT,
  roomname_id INT,
  FOREIGN KEY (username_id) REFERENCES users (id),
  FOREIGN KEY (roomname_id) REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

