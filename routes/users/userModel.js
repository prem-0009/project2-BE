const mongoose = require('mongoose');
const moment = require('moment');
const now = moment(); 

var UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        trim: true,
        unique: true,
        required: true, 
        default: ''
    }, 
    email: {
        type: String, 
        trim: true, 
        unique: true, 
        require: true, 
        default: ''
    },
    password: { type: String, default: ''},
    // timestamp: {type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a')},
    meals:[{type:mongoose.Schema.Types.ObjectId, ref:'Meals'}],
    workouts:[{type:mongoose.Schema.Types.ObjectId, ref:'Workouts'}]
    
});

module.exports = mongoose.model('User', UserSchema);