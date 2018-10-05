const mongoose = require('mongoose'),
Schema = mongoose.Schema;


const CitySchema = new Schema ({
    name: String,
    image: String,
    summary: String,
})



const UserPost = mongoose.model('UserPost', UserPostSchema);


module.exports = UserPost;