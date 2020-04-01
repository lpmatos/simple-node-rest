import cors from 'cors';
import express from 'express';
import routes from './routes/routes';
import config from './settings/config';

const port = config.NODE_PORT;
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, (error) => {
  if (error) {
    console.error(`Error starting Server ${error}`);
  } else {
    console.log(`Server listening at port ${port}.`);
  }
});
