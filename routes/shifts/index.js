const Shifts = require('../../models/shift');

module.exports = {
	get: async (req, res) => {
		try {
			const person = req.params.person;
			const product = req.params.product;

			const shift = await Shifts.findOne({ person, product }).populate('person').populate('product');
			res.json(shift);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
	update: async (req, res) => {
		const _id = req.params.id;
		try {
			const shift = await Shifts.findOneAndUpdate({ _id }, {$inc: { count: 1 }});
			res.status(200).json(shift);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}
