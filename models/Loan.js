const moongoose = require('mongoose');

const Loanscheme = new moongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Loan = moongoose.model('Loan', Loanscheme);

module.exports = Loan;