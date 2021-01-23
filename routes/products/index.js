const Products = require('../../models/product');

const express = require('express');
const router = express.Router();

const list = async (req, res) => {
	try {
		const products = await Products.find();
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

const details = async (req, res) => {
	const id = req.params.id;
	try {
		const product = await Products.findById(id);
		res.json(product);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

router.get('/', list);
router.get('/:id', details);

module.exports = router;
