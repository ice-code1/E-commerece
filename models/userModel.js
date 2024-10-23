const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    email:{
        type:String,
        required:false,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role: {
        type:String,
        enum:['guest','admin'],
        default:'guest'
    },

    customerInformation:{
        type:string,
        required: true
    },

    orderItems:{
        type:string
    },

    shippingAddress:{
        type:string
    }

})

const UserModel = mongoose.model('User_2',userSchema)

module.exports = UserModel