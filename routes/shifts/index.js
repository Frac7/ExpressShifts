const Shifts = require('../../models/shift');

module.exports = {
	get: async (req, res) => {
		try {
			const product = req.params.product;

			const shift = await Shifts.find({ product }).populate('person');
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
