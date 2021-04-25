const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

const sequenceSchema = new Schema({
    title:{
        type:String,
    required:true,
    },
    baseUrl:{
        type:String,

    },
    url:{
        type: String,

    }
});




module.exports = mongoose.model("Sequence",sequenceSchema);


