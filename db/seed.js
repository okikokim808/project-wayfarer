const mongoose = require('../models/User')
const data = require('./data')

const User = mongoose.model('User')

User.remove({})
    .then(_ => {
        User.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })