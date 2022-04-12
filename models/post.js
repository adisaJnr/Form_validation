const mongoose = require('mongoose');

 const { Schema } = mongoose;

 const postSchema = new Schema({
     name: {
         type: String,
         required: true,
     },
     email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
 },
 {timestamps:true}
 );
 const Data = mongoose.model('form',postSchema);

 module.exports = { Data } ;