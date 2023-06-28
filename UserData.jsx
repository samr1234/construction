const mongoose = require('mongoose');

const UserData = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
})

module.exports=mongoose.model('User', UserData);