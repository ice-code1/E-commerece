const  UserServices = require('../services/userServices')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const { fetchOne } = require('../services/hotelServices')
const userServices = require('../services/userServices')


class UserController{
    async userRegistration(req,res){
            const {username,email,password} = req.body
            const hashPassword = await bcrypt.hash(password,10) 
            const newUser = new UserModel({username, email, password:hashPassword})
            await newUser.save()
            res.status(201).json({message:" user registered successfully" })

            if(!newUser) res.status(500).json({
                success:false,
                message:' invalid user'
            })
        
    }

    async userLogin(req,res){
        const {email, password} = req.body
        const user = await UserModel.fetchOne({email})
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
            res.status(200).json({token})
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
        res.status(200).json({message:'user updated successfully'})
    }

    async deleteUser(req,res){
        const deletedUser = userServices.delete()
        if(!deletedUser){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({
            message:'User deleted successfully',
            user:deletedUser
        })
    }
}

module.exports = new UserController()