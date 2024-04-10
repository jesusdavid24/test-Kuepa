import express from 'express';
import http from 'http';
import ConfigExpress from './express';
import routes from '../routes';
import { passportLocal, passportJwt } from './passport';

const app = express();
const server = http.createServer(app);

ConfigExpress(app);
routes(app);

passportLocal();
passportJwt();

export default server;
