const mongoose = require("mongoose");
/*
User Model
name*
phoneNumber*
email*
hobbies
* marked ones are required and should be unique.
*/

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        min : 3
    },
    phoneNumber : {
        type : String ,
        required : true ,
        max: 10,
        unique : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    hobbies : {
        type : String
    }
});

module.exports = mongoose.model("user",userSchema);