const passport = require('./config/passport')()
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')


const userController = require('./controllers/users.js')
const postController = require('./controllers/posts.js')

const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(parser.json())

app.use('/users', userController)
app.use('/api/posts', postController)

module.exports.UserPost = require('./models/UserPost')
app.listen(3001, () => console.log('Listening on port 3001 :)'))