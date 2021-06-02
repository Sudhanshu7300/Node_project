const express = require("express");
const register = require("../../../Mernbackend/src/models/register");
const router = new express.Router();
const Student = require("../models/stud");

                                         // 1. create  a new students   with  Promises
                    //     router.post("/stud",(req,res)=>{
                    //     console.log(req.body);
                    //     const user = new Student(req.body);
                    //     user.save().then(()=>{res.status(201); res.send(user);
                    //     }).catch((e)=>{res.status(400);res.send(e);
                    //  })
                     // })

                                             // 1.1 create  a new students  with Async-Await 
      router.post("/stud",async(req,res)=>{
        try{
            const user = new register(req.body);
            const createUser = await user.save();
            res.status(201).send(createUser);
        }catch(e){ res.status(400).send(e); }
        })
    
                                               // 2.read the data of registered Students
        router.get("/stud", async(req,res)=>{
        try{
            const studentData = await Student.find();
            res.send(studentData);
        }catch(e){ res.send(e); }
      }) 
    
                                               // 3.update the student by it id 
     router.patch("/stud/:id",async(req,res)=>{
         try{
             const _id = req.params.id;
             const  updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
                 new : true
             });
             res.send(updateStudents);
         }catch(e){
             res.status(404).send(e);}
     })
                                                   // 4.Delete the student by it id 
     router.delete("/stud/:id",async(req,res)=>{
        try{
            const deleteStudents = await Student.findByIdAndDelete(req.params.id);
            if(!req.params.id){
            return res.status(404).send();
            }
            res.send(deleteStudents);
        }catch(e){
            res.status(404).send(e);}
    })

  

module.exports = router; 

