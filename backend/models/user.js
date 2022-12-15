const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const userSchema = Schema({
  
    email: {
        type: String,
        unique: true,
        minLength: 10,
    },
    password: {
        type: String,
        minLength: 5
    }

});

module.exports = mongoose.model('user', userSchema)