const express = require("express");
const router = express.Router();
const User = require("../Models/User");

class RegistrationServices{
    async saveUser(users){
        let response={
            status:{
                statusCode:200,
                successMsg:"Registered successfully!!!!"
            },
            error:null,
            payload:null
        };
        try{
            let user = new User({
                name : users.name,
                email : users.email,
                password : users.password,
                date:new Date(),
            });
            console.log("user registration service called inside",user);
            let red = await user.save();
            console.log("user registration service called inside red",red);
            response.payload = red;
            return response;
            
        }catch(error){
            return ("There was a problem registering the user in services.");
        }
    }
}

module.exports=RegistrationServices;
