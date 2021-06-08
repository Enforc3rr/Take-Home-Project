const joi = require("joi");


// To Validate the incoming Object
exports.userFormValidation = data =>{
    const schema = joi.object({
        name : joi.string().min(3).required(),
        phoneNumber : joi.string().max(10).required().regex(RegExp("^[0-9\\-]{10,}$")),
        email : joi.string().email().required(),
        hobbies : joi.string()
    });
    return schema.validate(data);
}
