import 'dotenv/config'
import {con} from './repository/conection.js'

import usuarioController from './controller/usuariocontroller.js';

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

// configuraçao dos endpoins
server.use(usuarioController)





server.listen(process.env.PORT, 
         () => console.log(`API online na porta ${process.env.PORT} `));