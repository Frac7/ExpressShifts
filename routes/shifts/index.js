const Shifts = require('../../models/shift');

module.exports = async (req, res) => {
	try {
		const person = req.params.person;
		const product = req.params.product;

		const shift = await Shifts.findOne({ person, product }).populate('person').populate('product');
		res.json(shift);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
