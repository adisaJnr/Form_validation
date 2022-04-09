const mongoose = require('mongoose');

 const { Schema } = mongoose;

 const postSchema = new Schema({
     name: {
         type: String,
         required: true,
     },
     gmail: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
 },
 {timestamps:true}
 );
 const Post = mongoose.model('post',postSchema);

 module.exports = { Post} ;