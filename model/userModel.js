const {model, Schema} = require('mongoose')


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        unique: true
       
      


    },
    email: {
        type: String,
       
    
    },
    password: {
      type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }


})


const User = model('User', userSchema)
module.exports = User;
