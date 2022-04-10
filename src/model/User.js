const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    firstname : {
        required : [true,'First name is required'],
        type : String,
    },
    lastname : {
        required : [true,'last name is required'],
        type : String,
    },
    email : {
        required : [true,'email is required'],
        type : String,
    },
    password : {
        required : [true,'password is required'],
        type : String,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    }
},{
    timestamp : true
})


//HASH
userSchema.pre('save',async function(next){

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})


const User = mongoose.model("User",userSchema)
module.exports = User