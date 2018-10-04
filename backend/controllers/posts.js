const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')

router.post('/create', (req, res) => {
    Post.create( req.body, (err, newPost) => {
        if(err){console.log(err)};
        res.json(newPost)
    })
});

router.get('/all', (req, res) => {
    Post.find( req.body.author, (err, userPosts) => {
        if(err){console.log(err)};
        res.json({userPosts});
        });
    });

router.get('/all/:id' , (req, res) => {
    let postId = req.params.id;
    Post.findById( postId , (err, foundPost) => {
        if(err) { return console.log(err) };
        res.json(foundPost);
    });
}); 

module.exports = router