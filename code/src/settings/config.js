const config = {
  NODE_PORT: process.env.NODE_PORT || 3301,
  MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
  MYSQL_PORT: process.env.MYSQL_PORT || "3306",
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD
};

module.exports = config;
