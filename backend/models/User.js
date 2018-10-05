const mongoose = require('../db/connection')
	Schema = mongoose.Schema


const UserSchema = new Schema({
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