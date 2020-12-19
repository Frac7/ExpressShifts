const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	person: {
		type: Number,
		required: true,
		ref: 'Person'
	},
	product: {
		type: Number,
		required: true,
		ref: 'Product'
	},
	count: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Shift', schema, 'shift');
