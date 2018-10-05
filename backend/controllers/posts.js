const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')

router.post('/create', (req, res) => {
    const post = new Post({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    _id: req.body._id
    });
    console.log(post)
    post  
        .save()
        .then (result => {
        res.json({message:'post created',
            post: result
            })
        })
        .catch ( err => {
        console.log(err);
        res.status(500).json({err})
        })
})


router.get('/all', (req, res) => {
    Post.find( req.body.author, (err, userPosts) => {
        if(err){console.log(err)};
        res.json({userPosts});
    });
});

router.get('/all/:id' , (req, res) => {
    let postId = req.params.id;
    Post.findOne( {_id: postId} , (err, foundPost) => {
        if(err) { return console.log(err) };
        res.json(foundPost);
    });
}); 

router.put('/all/:id', (req, res) => {
    let postId = req.params.id;
    let updateBody = req.body;
    Post.findOneAndUpdate( {_id: postId},
        updateBody, {new: true},
        (err, updateBody) => {
        if(err){console.log(err)};
        res.json({updateBody});
    });
});

module.exports = router