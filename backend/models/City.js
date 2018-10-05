const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const CitySchema = new Schema ({
    name: String,
    image: String,
    summary: String,
})



const City = mongoose.model('City', CitySchema);
module.exports = City;