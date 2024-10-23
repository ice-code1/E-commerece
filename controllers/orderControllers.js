const OrderService = require('../services/orderServices')

class OrderController{
    //create an order
    async createOrder(req,res){
        const reqBody = req.body
        console.log(reqBody)
        
        
        const existingOrder = await OrderService.fetchOne({
            name: reqBody.name.toLowerCase()
        })

        if(existingOrder) res.status(403).json({
            success: false,
            message:"order already exist"
        })

        const newOrder = await OrderService.create(reqBody)

        res.status(201).json({
            success:true,
            message:"Order created successfully",
            data: newOrder
        })
    }
 
    async updateOrder(req,res){
        const OrderId = req.params.id
        const updateData = req.body
        

        const existingOrder = await OrderService.fetchOne({
            _id:OrderId
        })
        if(!existingOrder) req.status(403).json({
            success:false,
            message:"Order to edit do not exist"
        })
        //name is a unique key and should be consistient
        if(updateData.name){
            const existingOrderWithUpdateName = await OrderService.fetchOne({
                name:updateData.name.toLowercase()
            })
            if(existingOrderWithUpdateName._id.toString() !== updateData._id.toString()){
                res.status(403).json({
                    success:false,
                    message:'Order with updated name already exist'
                })
            }
        }

        const updatedData = await OrderService.update(OrderId,updateData)
        res.status(200).json({
            success: true,
            message: "Order updated successfully",
            data:updatedData
        })
      
    }

    async deleteOrder(req,res){
        const OrderId = req.params.id

        const existingOrder = await OrderService.fetchOne({
            _id:OrderId
        })

        if(!existingOrder) res.status(403).json(
            {
                success:false,
                message:" Order to delete does not exist"
            }
        )

        const deletedOrder = await OrderService.delete(HotelRoomId)

        res.status(200).json({
            status:true,
            message:'Order deleted successfully',
            data: deletedOrder
        })
    }    
    
    async fetchOneOrder (req,res){
        const OrderId = req.params.id
        
        const existingOrder = await OrderService.fetchOne({
            _id: OrderId
        })

        if(!existingOrder) res.status(401).json({
            success:false,
            message:"Order to be fetched is not found"
        })


        res.status(200).json({
            success:true,
            message:"Order fetched successfully",
            data:existingOrder
        })
    }

    async searchOrder(req,res){
        const item = req.body

        const search = await OrderService.findAll( {} )
        if(search == item){
            res.status(200).json({
                success:true,
                message:"Order fetched Successfully",
                data:search
            })
        }
    }

    async fetchMany(req,res){
        const fetchedOrder = await OrderService.findAll( {} )

        res.status(200).json({
            success:true,
            message:"Order fetched Successfully",
            data:fetchedOrder
        })
    }

}

module.exports = new OrderController()

