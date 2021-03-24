"use strict";
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const RegistrationServices = require("../Services/RegistrationServices");

let registrationServices = new RegistrationServices();

router.post('/new-user', async(req, res)=>{
    console.log("request data",req.body);
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let user ={
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword,
        date:new Date(),
      };
    try{
        let response = await registrationServices.saveUser(user);
        return res.status(200).json(response);
        
    }catch(error){
        return res.status(500).send("There was a problem registering the user in Registration route.");
    }
   
});



  module.exports = router;