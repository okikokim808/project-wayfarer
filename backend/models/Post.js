const mongoose = require('../db/connection')
    User = require ('./User')

const PostSchema = new mongoose.Schema({
    author: [User.schema],
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

mongoose.model('Post', PostSchema)

module.exports = mongoose