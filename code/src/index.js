const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");
const config = require("./settings/config");
const port = config.NODE_PORT;
const server = express();
const pool = require("./database/connector");

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, (error) => {
  if (error) {
    console.error(`Error starting Server ${error}`);
  }else{
    console.log(`Server listening at port ${port}.`);
  }
});
