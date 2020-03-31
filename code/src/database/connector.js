const mysql = require("mysql");
const config = require("../settings/config");

const pool = mysql.createPool({
  connectionLimit: 50,
  acquireTimeout:  100000,
  connectTimeout:  100000,
  host: "mysql",
  user: "root",
  password: "123456",
  port: "3306",
  database: "database",
});

console.log("pool => criado");

pool.on("release", () => console.log("pool => conexão retornada")); 

process.on("SIGINT", () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log("pool => fechado");
        process.exit(0);
    })
); 

module.exports = pool;
