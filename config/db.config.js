'use strict';

const mysql = require('mysql');

// local mysql db connection

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'node_mysql_crud_db'
});

var _db;

module.exports = {
  connectToServer: function() {
    dbConn.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server");
    });
  },

  getDB: function() {
    return _db;
  }
};