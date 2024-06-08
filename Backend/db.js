const mongoose = require('mongoose');
require('dotenv').config()

async function connectToMongoDB(){
    try{
        await mongoose.connect(process.env.MongoDb_URL)
        console.log("connented to MongoDb")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectToMongoDB;