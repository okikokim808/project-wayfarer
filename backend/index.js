const passport = require('./config/passport')()
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./models')

const userController = require('./controllers/users.js')
const postController = require('./controllers/posts.js')

const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(parser.json())

app.use('/users', userController)
app.use('/posts', postController)
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/users', function profilePage(req, res) {
    db.User.find({}, (err, allUsers) => {
        if(err){console.log(err);}
        res.json(allUsers)
    })
})

app.get('/api/posts', function postPage(req, res) {
    db.Post.find({}, (err, allPosts) => {
        if(err) {
            console.log(err)
        }
        res.json(allPosts)
    })
})





app.listen(3001, () => console.log('Listening on port 3001 :)'))