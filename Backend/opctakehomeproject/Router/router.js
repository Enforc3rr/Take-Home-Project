const express = require("express");
const router = express.Router();

const {createUser,getAllUsers,updateUser,deleteUser,emailData} = require("../Controller/userController");

//POST Requests
router.route("/create")
    .post(createUser);
router.route("/send")
    .post(emailData);

//GET Requests
router.route("/fetch")
    .get(getAllUsers);

//PATCH Requests
router.route("/update/:id")
    .patch(updateUser);

//DELETE Requests
router.route("/delete/:id")
    .delete(deleteUser);


module.exports = router;