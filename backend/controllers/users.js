const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('../config/passport')
const config = require('../config/config')
const bcrypt = require('bcrypt'); 

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

router.post('/login', (req, res) => {
    User.find({email: req.body.email})
      .select('+password')
      .exec()
      .then( users => {
        if(users.length < 1) {
          return res.status(401).json({
            message: "Email/Password incorrect"
          })
        }
        bcrypt.compare(req.body.password, users[0].password, (err, match) => {
          if(err){console.log(err);return res.status(500).json({err})}
          if(match){
            const token = jwt.sign(
              {
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
            res.status(401).json({message: "Email/Password incorrect"})
          }
        })
  
  
      })
      .catch( err => {
        res.status(500).json({err})
      })
})



// $('#logout').on ('click', function () {
//   window.location.pathname = '/'
// })


module.exports = router