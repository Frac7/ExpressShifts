const express = require('express');
const router = express.Router();

const products = require('./products');

router.get('/products', products.list);

module.exports = router;
