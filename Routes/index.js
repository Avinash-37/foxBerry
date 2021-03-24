"use strict";
const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.get("/user",async(req,res)=>{
    try{
        let user=await User.find({});
        return res.status(200).send(user);
    }catch(error){
        return res.status(500).send("There was a problem when finding the user.");
    }
})

module.exports = router;