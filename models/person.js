const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	_id: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Person', schema, 'person');
