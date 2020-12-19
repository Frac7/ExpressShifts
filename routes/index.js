const express = require('express');
const router = express.Router();

const products = require('./products');

router.get('/products', products.list);
router.get('/products/:id', products.details);

module.exports = router;
