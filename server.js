require('dotenv').config();
const express = require('express');
const server = express();

const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

server.use(express.json());
server.use(cors());

const router = require('./routes');
server.use('/', router);

server.listen(process.env.PORT, () => console.log('Server started!'));
