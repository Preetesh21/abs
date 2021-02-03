const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    gender : {
        type : Number,
        default:0,
        required : true
    },
    marital : {
        type : Number,
        default:0,
        required : true
    },
    dependents : {
        type : Number,
        default:0,
        required : true
    },
    education : {
        type : Number,
        default:0,
        required : true
    },
    status : {
        type : Number,
        default:0,
        required : true
    },
    appincome : {
        type : Number,
        default:0,
        required : true
    },
    coapincome : {
        type : Number,
        default:0,
        required : true
    },
    loan : {
        type : Number,
        default:0,
        required : true
    },
    loanterm : {
        type : Number,
        default:0,
        required : true
    },
    credit : {
        type : Number,
        default:0,
        required : true
    },
    property : {
        type : Number,
        default:0,
        required : true
    },
    predict:{
        type:Number,
        default:0,
        required: true
    }
});

module.exports = mongoose.model('Loan',LoanSchema);
