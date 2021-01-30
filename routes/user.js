const express=require('express');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const passport= require('passport');

const passportConfig=require('../config/passport');
const User=require('../models/Users');
const loan=require('../models/Loan');
const app=express.Router();


const signToken = userID =>{
    return jwt.sign({
        iss : "NoobCoder",
        sub : userID
    },"NoobCoder",{expiresIn : "1h"});
}

app.post('/register',(req,res)=>{
    const { name,email,password } = req.body;
    User.findOne({email},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({message : {msgBody : "Email is already taken", msgError: true}});
        else{
            const newUser = new User({name,email,password});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}});
            });
        }
    });
});

app.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,name,email} = req.user;
       console.log(_id,name,email);
       const token = signToken(_id);
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
       res.status(200).json({isAuthenticated : true,user : {name,email}});
    }
});

app.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{name : "", email : ""},success : true});
});


module.exports = app;