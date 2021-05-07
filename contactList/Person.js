const { Schema, model }   = require('mongoose')

const personSchema = new Schema({
    name:{
        type     : String,
        required : true,
        trim     : true,
        minlength: 4,
        maxlength: 20
    },
    email:{
        type     : String,
        required : true,
        trim     : true
    },
    phone:{
        type     : String,
        required : true,
        trim     : true,
        minlength: 2,
        maxlength: 20
    }
})

const Person   = model('Person',personSchema)
module.exports = Person