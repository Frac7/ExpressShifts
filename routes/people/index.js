const People = require('../../models/person');

module.exports = {
	list: async (req, res) => {
		try {
			const products = await People.find();
			res.json(products);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
	details: async (req, res) => {
		const id = req.params.id;
		try {
			const product = await People.findById(id);
			res.json(product);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}
