const express = require('express');
const router = express.Router();

const products = require('./products');

router.get('/products', products.list);
router.get('/products/:id', products.details);

const people = require('./people');

router.get('/people', people.list);
router.get('/people/:id', people.details);

const shifts = require('./shifts');

router.get('/shifts/:person/:product', shifts);

module.exports = router;
