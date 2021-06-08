const userDatabase = require("../Models/userModel");
const {userFormValidation} = require("../Configurations/userValidation");
const emailSender = require("../Configurations/nodemailer");

/*
@desc To Create a new User
@route POST /api/v1/user/create
@model {
name
phoneNumber
email
hobbies
}
*/
exports.createUser = async (req,res)=>{
    try{
        //Using Joi validator to check if the incoming request meets required criteria.
        const {error} = await userFormValidation(req.body);
        if(error) return res.status(400).json({
            success : false ,
            message : error.details[0].message
        });

        await userDatabase.create(req.body);

        return res.status(201).json({
            success : true ,
            message : "User Has Successfully been added"
        });
    }catch (e) {
        return res.status(400).json({
            success : false ,
            message : "There was an Error While Saving User"
        });
    }
}
/*
@desc To Fetch All Users
@route GET /api/v1/user/fetch
*/
exports.getAllUsers = async (req,res)=>{
    const data= await userDatabase.find();
    return res.status(200).json(data);
}
/*
@desc To Delete a user
@route /api/v1/user/delete/:id
*/

exports.deleteUser = async (req,res)=>{
    try {
        await userDatabase.deleteOne({_id:req.params.id});
        return res.status(200).json({
            success : true ,
            message : "User Successfully Deleted"
        });
    }catch (e) {
        return res.status(400).json({
            success : false ,
            message : "There was some Error While Deleting The user"
        });
    }
}
/*
@desc To Patch a particular field in User
@route /api/v1/user/update/:id
@note Front-end Implementation of this end-point has not been done yet.
*/
exports.updateUser = async (req,res)=>{
    try{
        await userDatabase.findByIdAndUpdate(req.params.id,req.body);

        return res.status(200).json({
            success : true ,
            message : "User Data Updated Successfully"
        });
    }catch (e) {
        return res.status(400).json({
            success : false ,
            message : "User Data Updation Failed"
        });
    }
}
/*
@desc  To send user data via email to any other user.
@route POST /api/v1/user/send
@note  I Know instead of sending userId I could have sent Array Of JSON objects which already contains User Details which
       but At this time my front-end skills are not strong enough that i will know how to send all the data at once.
       so, I sent in the ids of users only.
@model {
[array of user ID]
}
*/
exports.emailData = async (req,res)=>{
    const usersToSend = [];
    try {
        for(let i = 0 ; i < req.body.length ; i++){
            const data = await  userDatabase.findById(req.body[i]);
            usersToSend.push(data);
        }
        await emailSender(usersToSend);
        return res.status(200).json({
            success : true ,
            message : "User Data Sent Successfully"
        });
    }catch (e) {
        return res.status(400).json({
            success : false ,
            message : "Failed To Send User Data"
        });
    }
}

