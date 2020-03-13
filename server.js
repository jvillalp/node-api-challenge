//npmi
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
///use
const server = express();
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

const actionRouter = require('./data/routers/actionRouter');
const projectionRouter = require('./data/routers/projectRouter');

server.get('/', (req, res) =>{
    res.status(200).json({ message: 'Server is working, now time to work :)'})
})

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectionRouter)

module.exports = server;
