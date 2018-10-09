const mongoose = require('../db/connection')
    User = require ('./User')
    Schema = mongoose.Schema

const PostSchema = new Schema({
    author: {
        type: String,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // _id : String,
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post