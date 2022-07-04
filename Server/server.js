const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

const controllers = require("./controllers");
server.use("/tasks", controllers.tasks)

server.get('/', (req,res) => res.send('Welcome to the server!'))

module.exports = server;
