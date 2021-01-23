require('dotenv').config();
const express = require('express');
const server = express();

const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

server.use(express.json());
server.use(cors());

const { products, people, shifts } = require('./routes');

server.use('/products', products);
server.use('/people', people);
server.use('/shift', shifts);

server.listen(process.env.PORT, () => console.log('Server started!'));
