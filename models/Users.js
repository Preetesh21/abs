const moongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Userscheme = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Hashing the password
Userscheme.pre('save',function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});


// Authentication via password matching through bcrypt
Userscheme.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
    });
}


const User = moongoose.model('User', Userscheme);

module.exports = User;