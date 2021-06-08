const nodemailer = require("nodemailer");
const email = async (data)=>{
    let transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL,
            pass : process.env.EMAILPASSWORD
        }
    });

    let mainOptions = {
        from : process.env.EMAIL,
        to : process.env.RECEIVER,
        subject : "User Data",
        text : JSON.stringify(data)
    }

    await transporter.sendMail(mainOptions);
    console.log("Email sent")
}


module.exports =  email;