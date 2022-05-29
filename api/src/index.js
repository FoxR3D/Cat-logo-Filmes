import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { con } from './repository/connection.js'
const server = express();

server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API online e conectada na porta ${process.env.PORT}` ))