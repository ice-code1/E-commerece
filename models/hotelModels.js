const mongoose = require('mongoose')
const constants = require("../constants/hotelConstants")
const {USER_TYPES, DATABASE} = constants

const Hotel = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

        room_type:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            enum:[USER_TYPES.USER,USER_TYPES.AGENT],
        },

        price:{
            type:Number,
            required: true,
        }

    },
    {
        timestamps:true
    }
)

const HotelModel1 = mongoose.model('Hotel', Hotel )
module.exports = HotelModel1