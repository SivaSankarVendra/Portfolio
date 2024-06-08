const mongoose = require('mongoose')
const { Schema } = mongoose;
const MessageSchema = new Schema({
    userName : {
        type : String,
        required:true
    },
    email : {
        type: String,
        required : true
    },
    message:{
        type : String,
        required: true
    },
    date:{
        type : Date,
        default: Date.now
    }
    
  });

  module.exports = mongoose.model('message',MessageSchema)