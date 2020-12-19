const product = require('../../models/product')

module.exports = {
	list: async (req, res) => {
		try {
			const products = await product.find();
			res.json(products);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}
