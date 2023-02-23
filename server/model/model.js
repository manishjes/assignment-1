const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    courseName : {
        type : String,
        required: true
    },
    duration : {
        type: Number,
        required: true
    },
    fees : {
        type: Number,
        required: true,
    },
    
})

const CRUD = mongoose.model('CRUD', schema);

module.exports = CRUD;