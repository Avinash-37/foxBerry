"use strict";
const express = require("express");
const router = express.Router();
const SubjectServices = require("../Services/SubjectServices");

let subjectServices = new SubjectServices();

router.get('/view', async(req, res)=> {
    console.log("request data in view subject");
        try{
            let response = await subjectServices.viewAllSubject();
            return res.status(200).json(response);
        }catch(error){
            return res.status(500).send("There was a problem view subject route.");
        }
  });

router.post('/add', async(req, res)=> {
    console.log("request data in add subject",req.body);
        let subject ={
            name:req.body.subjectName,
            files:req.body.fileUrl,
            date: new Date()
          };
        try{
            let response = await subjectServices.addSubject(req.body);
            return res.status(200).json(response);
        }catch(error){
            return res.status(500).send("There was a problem Add subject in SubjectRoute.");
        }
  });

router.post('/update', async(req, res)=> {
    console.log("request data in update subject",req.body);
    try{
        let response = await subjectServices.updateSubject(req.body);
        return res.status(200).json(response);
    }catch(error){
        return res.status(500).send("There was a problem update subject in SubjectRoute.");
    }
});

router.post('/delete', async(req, res)=> {
    console.log("request data in delete subject",req.body);
        try{
            let response = await subjectServices.deleteSubject(req.body);
            return res.status(200).json(response);
        }catch(error){
            return res.status(500).send("There was a problem delete subject in SubjectRoute.");
        }
  });

module.exports = router;