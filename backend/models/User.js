const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		unique: true,
		required: true
	}
})

mongoose.model('User', UserSchema)

module.exports = mongoose