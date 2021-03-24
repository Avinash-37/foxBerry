const express = require("express");
const router = express.Router();
const User = require("../Models/User");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const envfile = require("../env.json");

class LoginServices{
    async loginUser(users){
        let responses={
            status:{
                statusCode:200,
                successMsg:"Login successfully!!!!"
            },
            error:null,
            payload:null
        };
        try{
            let response = await User.find({email:users.email});
                console.log("user data when login",response);
            let matched = await bcrypt.compare(users.password, response[0].password);
                console.log("matched",matched);
                if (matched) {
                    var token = jwt.sign({email:users.email,name:users.name}, envfile.SECRET_KEY);
                    let updatedResponse= await User.updateOne({email:users.email},{$set:{jwtToken:token}});
                    if(updatedResponse){
                        console.log("user token updated");
                        responses.payload= {auth: true, token: token }
                        return responses;
                    }
                }else{
                    responses.error = {
                        errorName:"Password "
                    }
                    return responses.error;
                }
            
        }catch(error){
            responses.error = {
                errorName:"user token NOt updated"
            }
            return responses.error;
        }
    }
}

module.exports=LoginServices;