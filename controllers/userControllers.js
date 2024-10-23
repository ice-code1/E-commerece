const  UserServices = require('../services/userServices')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const OrderModel = require('../models/orderModels')
const userServices = require('../services/userServices')
const orderServices = require('../services/orderServices')
//const userServices = require('../services/userServices')
require('dotenv').config()

class UserController{
    async userRegistration(req,res){
            const newUser = await UserServices.fetchOne({
                password: await bcrypt.hash(req.body.password,10)
            })

            const NewUser = await UserServices.create(req.body)
            await NewUser.save()
            res.status(201).json({
                success: true,
                message:" user registered successfully",
                data: NewUser
             })

            if(!NewUser) res.status(500).json({
                success:false,
                message:' invalid user',
            })
        
    }

    async userLogin(req,res){
        const {username,password} = req.body
        const user = await userServices.fetchOne({username:username})
        if(!user){
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }
        const passwordMatch =  await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }
        const token = jwt.sign(
            {userId:user._id},
            'secret',
            {expiresIn:'1hr'})
        
        res.status(200).json({
            success:true,
            message: "user login successfully",
            data: user, 
            token
        })
        
    }

    async fetchUser(req,res){
        const user = await UserModel.findById(req.params.id)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json(user)

    }

    async updateUser(req,res){
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedUser){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({
            success:true,
            message:'user updated successfully',
            data: updatedUser
        })
    }

    async deleteUser(req,res){
        const deletedUser = UserServices.delete()
        if(!deletedUser){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({
            message:'User deleted successfully',
            user:deletedUser,
            data:deletedUser
        })
    }

    async orderCreation(req,res){

        const NewOrder = await orderServices.create(req.body)
        await NewOrder.save()
        res.status(201).json({
            success: true,
            message:" order created successfully",
            data: NewOrder
         })

        if(!NewOrder) res.status(500).json({
            success:false,
            message:' invalid order',
        })
    
    }

    async updateOrder(req,res){
        const updatedOrder = await OrderModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedOrder){
            return res.status(404).json({message:'order not found'})
        }
        res.status(200).json({
            success:true,
            message:'order updated successfully',
            data: updatedOrder
        })
    }

    async viewOrder(req,res){
        const order = await OrderModelModel.findById(req.params.id)
        if(!order){
            return res.status(404).json({message:'order not found'})
        }
        res.status(200).json(order)

    }

    
}

module.exports = new UserController()