const mongoose = require('mongoose')
const constants = require("../constants/orderConstants")
const {USER_TYPES, DATABASE} = constants

const Order = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

        item_type:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            enum:['user',constants.USER_TYPES.AGENT],
        },

        description:{
            type:String
        },

        price:{
            type:Number,
            required: true,
        },

        quantity:{
            type:Number
        },

        image:{
            type:string,
            data: Buffer,
            contentType:String
        }

    },
    {
        timestamps:true
    }
)

const OrderModel1 = mongoose.model('Order', Order )
module.exports = OrderModel1