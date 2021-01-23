const Shifts = require('../../models/shift');

const express = require('express');
const router = express.Router();

const get = async (req, res) => {
	try {
		const product = req.params.product;

		const shift = await Shifts.find({ product }).populate('person');
		res.json(shift);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

const update = async (req, res) => {
	const product = req.params.product;
	const person = req.params.person;
	try {
		const shift = await Shifts.findOneAndUpdate({ product, person }, {$inc: { count: 1 }});
		res.status(200).json(shift);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

router.get('/:product', get);
router.post('/:product/:person', update);

module.exports = router;
