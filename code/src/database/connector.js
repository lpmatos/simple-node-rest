const mysql = require("mysql");
const config = require("../settings/config");

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
});

connection.connect(error => {
  if(error) {
    console.log("Bad connection with database... ", error);
    return;
  }else {
    console.log("Sucess connection with database");
  }
});

module.exports = connection;
