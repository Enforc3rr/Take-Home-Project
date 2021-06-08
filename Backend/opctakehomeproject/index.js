const express = require("express");
const app = express();
const router = require("./Router/router");
const databaseConfig = require("./Configurations/databaseConfig");
const dotenv = require("dotenv");
dotenv.config({
    path : "./Configurations/configurations.env"
});

// Middleware to allow every url to use every method on the end points (basically by-passing cors)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connecting To database
databaseConfig()
    .then(()=>console.log("Connection To Database Successful"))
    .catch(()=>console.log("Connection To Database Failed"));

//Middleware to convert JSON received in request body as an Object
app.use(express.json());
//Routes
app.use("/api/v1/user",router);


const PORT = 8000 || process.env.PORT;
//starting Server
app.listen(PORT , ()=>console.log(`Server Started At Port ${PORT}`));