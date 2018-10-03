const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String
})

mongoose.model('Post', PostSchema)

module.exports = mongoose