const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('../config/passport')
const config = require('../config/config')
const bcrypt = require('bcrypt'); 
const bodyParser = require('body-parser')

const mongoose = require('../models/User')
const User = mongoose.model('User')

router.post('/signup', (req, res) => {
    User.find({email: req.body.email})
    .select('+password')
    .exec()
    .then( user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "email already exists"
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){ 
            res.status(500).json({error: err})
          } else {
            const userToCreate = new User({
              username: req.body.username,
              email: req.body.email,
              password: hash,
            });
            User.create(userToCreate, (err, users) => {
                if(err){console.log(err);}
                const token = jwt.sign(
                    {users},
                    'icup',
                    {
                        expiresIn: '5h'
                    },
                    (err, token) => {
                        if(err){res.json(err)}
                    res.status(200).json({
                        message: 'User Created',
                        users,
                        token
                    })
                    }
                )
            })
          }
        })
      }
    })
});


router.get('/:id', (req, res) => {
  let id = req.params.id
  console.log("id: "+id)
  User.findOne({ _id: id })
    .then(user => res.send(user))
    .catch(function(err) { 
      res.json(err)
    })
  });

router.post('/login', (req, res) => {
    User.find({username: req.body.username})
      .select('+password')
      .exec()
      .then( users => {
        if(users.length < 1) {
          return res.status(401).json({
            message: "Username/Password incorrect"
          })
        }
        bcrypt.compare(req.body.password, users[0].password, (err, match) => {
          if(err){console.log(err);return res.status(500).json({err})}
          if(match){
            const token = jwt.sign(
              {
                username: users[0].username,
                email: users[0].email,
                _id: users[0]._id
              }, 
              "icup",
              {
                expiresIn: "5h"
              },
            );
            return res.status(200).json(
              {
                message: 'Auth successful',
                token
              }
            )
          } else {
            res.status(401).json({message: "Username/Password incorrect"})
          }
        })
  
  
      })
      .catch( err => {
        res.status(500).json({err})
      })
})

router.get('/all', (req, res) => {
  User.find( {}, (err, usersAll) => {
      if(err){console.log(err)};
      res.json({usersAll});
  });
});

router.get('/all/:id' , (req, res) => {
  let userId = req.params.id;
  User.findOne( {_id: userId} , (err, foundUser) => {
      if(err) { return console.log(err) };
      res.json(foundUser);
  });
}); 




module.exports = router