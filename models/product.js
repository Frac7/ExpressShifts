const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	_id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	}
});

module.exports = mongoose.model('Product', schema, 'product');
