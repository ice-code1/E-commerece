UserModel = require('../models/userModel')

class UserServices{
    //create a user
    async create(userData){
        return await UserModel.create(userData) 
    }

    async update(id,userupdate){
        return await UserModel.findByIdAndUpdate(id,userupdate,{new:true})
    }

    async delete(id){
        return await UserModel.findByIdAndDelete(id)
    }

    async fetchOne(filter){
        return await UserModel.findOne(filter)
    }

    async findAll(filter){
        return await UserModel.find(filter)
        }
}

module.exports = new UserServices()