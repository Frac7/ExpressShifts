const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	person: {
		type: Number,
		required: true
	},
	product: {
		type: Number,
		required: true
	},
	count: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Shift', schema, 'shift');
