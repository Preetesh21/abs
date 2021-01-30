const express=require('express');
require('dotenv').config();
const cors=require('cors');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const app=new express();
const bodyParser = require("body-parser");



app.use(cookieParser());

// Middleware Body Parser    
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Middleware
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Database
const db = process.env.mongouri;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the db."))
    .catch(err => console.log('asa', err));


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on ${PORT} number`));