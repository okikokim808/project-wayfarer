const mongoose = require('mongoose'),
Schema = mongoose.Schema;


const UserPostSchema = new Schema ({
    _post: {type: Schema.Types.ObjectId, ref: "Post"},
    _user: {type: Schema.Types.ObjectId, ref: "User"}
})



const UserPost = mongoose.model('UserPost', UserPostSchema);


module.exports = UserPost;