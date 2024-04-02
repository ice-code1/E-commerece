HotelModel = require('../models/hotelModels')

class HotelService{
    //create  a room
    async create(hotelData){
        return await HotelModel.create(hotelData)
    }

    //edit a room
    async update(id,roomupdate){
        return await HotelModel.findByIdAndUpdate(id,roomupdate,{new:true})
    }

    //delete a room
    async delete(id){
        return await HotelModel.findByIdAndDelete(id)
    }

    //get a single room
    async fetchOne(filter){
        return await HotelModel.findOne(filter)
    }
    //get all rooms

 async findAll(filter){
    return await HotelModel.find(filter)
    }
}

module.exports = new HotelService()