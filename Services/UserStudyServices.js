const express = require("express");
const router = express.Router();
const UserStudy= require("../Models/UserStudy");

class UserStudyServices{
    async addSubject(subjects){
        let response={
            status:{
                statusCode:200,
                successMsg:"userStudyServices Added successfully!!!!"
            },
            error:null,
            payload:null
        };
        try{
            let userStudy = new UserStudy({
                user_id:subjects.user_id,
                subject_id:subjects.subject_id,
                status : "Study not started",
                created_at:new Date(),
            });
            console.log("user userStudy service called inside",userStudy);
            let red = await userStudy.save();
            console.log("user userStudy service called inside red",red);
            response.payload = red;
            return response;
            
        }catch(error){
            return ("There was a problem userStudy the user in userStudyservices.");
        }
    }

    async updateSubject(subjects){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"userStudy Updated successfully!!!!"
                },
                error:null,
                payload:null
            };
        try{
            console.log("user userStudy service called inside",subjects);
            await UserStudy.updateOne({_id:subject.id},{name:subjects.subjectName,files:subjects.fileUrl});
            return response;
            
        }catch(error){
            return ("There was a problem userStudy the user in userStudyservices.");
        }
    }

    async deleteSubject(subjects){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"userStudy Deleted successfully!!!!"
                },
                error:null,
                payload:null
            };
        try{
            console.log("user userStudy service called inside",subjects);
            let delFind = await UserStudy.find({_id:subjects.id});
            console.log("user userStudy service called inside",delFind);
            if(delFind.length > 0){
                let del = await UserStudy.remove({_id:subjects.id});
                console.log("user userStudy service called inside deldeldeldeldel",del);
                response.payload = del;
                return response;
            }else{
                let errorRes={
                    error:"Product already deleted!!!!"
                }
            return (errorRes);
            }
            
            
        }catch(error){
            return ("There was a problem userStudy delete in userStudyservices.");
        }
    }

    async viewAllSubject(){
        let response={
                status:{
                    statusCode:200,
                    successMsg:"userStudy List!!!!"
                },
                error:null,
                payload:null
            };
        try{
            let userStudyServicesList = await UserStudy.find({});
            console.log("user userStudyServices service called inside",userStudyServicesList);
            response.payload=userStudyServicesList;
            return response;
            
        }catch(error){
            return ("There was a problem userStudyServices the user in userStudyServicesservices.");
        }
    }


}

module.exports=UserStudyServices;