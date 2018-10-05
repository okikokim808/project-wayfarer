const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-wayfarer", {useNewUrlParser: true});

//require and export models
module.exports.User = require('./User')
module.exports.City = require('./City');
module.exports.Post = require('./Post')
