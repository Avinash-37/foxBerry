"use strict";
const express = require("express");
const router = express.Router();
const LoginServices = require("../Services/LoginServices");

let loginServices = new LoginServices();

router.post('/', async(req, res)=> {
    console.log("request data in login",req.body);
        let user ={
            email : req.body.email,
            password : req.body.password,
          };
        try{
            let response = await loginServices.loginUser(user);
            return res.status(200).json(response);
        }catch(error){
            return res.status(500).send("There was a problem Login user in Login route.");
        }
  });

module.exports = router;