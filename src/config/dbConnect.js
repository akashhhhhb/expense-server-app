const mongoose = require("mongoose")
require('dotenv').config({ path: 'config.env' });
const dbConnect = async () =>
{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser : true,
        });
        console.log("db connectes successfully")
    }catch(error){
        console.log(`Error ${error.message}`);
    }
}

module.exports  = dbConnect