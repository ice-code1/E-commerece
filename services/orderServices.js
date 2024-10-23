orderModel = require('../models/orderModels')

class OrderService{
    //create  a room
    async create(orderData){
        return await orderModel.create(orderData)
    }

    //edit a room
    async update(id,roomupdate){
        return await orderModel.findByIdAndUpdate(id,orderupdate,{new:true})
    }

    //delete a room
    async delete(id){
        return await orderModel.findByIdAndDelete(id)
    }

    //get a single room
    async fetchOne(filter){
        return await orderModel.findOne(filter)
    }
    //get all rooms

 async findAll(filter){
    return await orderModel.find(filter)
    }
}

module.exports = new OrderService()