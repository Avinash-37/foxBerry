const express = require("express");
const router = express.Router();
const Subject = require("../Models/Subject");

class SubjectServices{
    async addSubject(subjects){
        let response={
            status:{
                statusCode:200,
                successMsg:"Subject Added successfully!!!!"
            },
            error:null,
            payload:null
        };
        try{
            let subject = new Subject({
                name : subjects.subjectName,
                files : subjects.fileUrl,
                date:new Date(),
            });
            console.log("user Subject service called inside",Subject);
            let red = await subject.save();
            console.log("user Subject service called inside red",red);
            response.payload = red;
            return response;
            
        }catch(error){
            return ("There was a problem Subject the user in Subjectservices.");
        }
    }

    async updateSubject(subjects){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"Subject Updated successfully!!!!"
                },
                error:null,
                payload:null
            };
        try{
            console.log("user Subject service called inside",subjects);
            await Subject.updateOne({_id:subject.id},{name:subjects.subjectName,files:subjects.fileUrl});
            return response;
            
        }catch(error){
            return ("There was a problem Subject the user in Subjectservices.");
        }
    }

    async deleteSubject(subjects){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"Subject Deleted successfully!!!!"
                },
                error:null,
                payload:null
            };
        try{
            console.log("user Subject service called inside",subjects);
            let delFind = await Subject.find({_id:subjects.id});
            console.log("user Subject service called inside",delFind);
            if(delFind.length > 0){
                let del = await Subject.remove({_id:subjects.id});
                console.log("user Subject service called inside deldeldeldeldel",del);
                response.payload = del;
                return response;
            }else{
                let errorRes={
                    error:"Product already deleted!!!!"
                }
            return (errorRes);
            }
            
            
        }catch(error){
            return ("There was a problem Subject delete in Subjectservices.");
        }
    }

    async viewAllSubject(){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"Subject List!!!!"
                },
                error:null,
                payload:null
            };
        try{
            let subjectList = await Subject.find({});
            console.log("user Subject service called inside",subjectList);
            response.payload=subjectList;
            return response;
            
        }catch(error){
            return ("There was a problem Subject the user in Subjectservices.");
        }
    }


}

module.exports=SubjectServices;