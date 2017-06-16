const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'listings'
});

db.connect();

module.exports = db;
