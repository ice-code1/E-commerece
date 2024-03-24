const HotelService = require('../services/hotelServices')

class HotelController{
    //create a room
    async createHotelRoom(req,res){
        const reqBody = req.body
        console.log(reqBody)
        
        //if HotelRoom  exist

        //if HotelRoom does not exist create new HotelRoom and send a response
        const existingHotelRoom = await HotelRoomService.fetchOne({
            name: reqBody.name.toLowerCase()
        })

        if(existingHotelRoom) res.status(403).json({
            success: false,
            message:"Hotel Rooms already exist"
        })

        const newHotelRoom = await HotelRoomService.create(reqBody)

        res.status(201).json({
            success:true,
            message:"HotelRoom created successfully",
            data: newHotelRoom
        })
    }
    //Update a Hotel Room
    async updateHotelRoom(req,res){
        const HotelRoomId = req.params.id
        const updateData = req.body
        //check if HotelRoom to edit is not in database

        const existingHotelRoom = await HotelRoomService.fetchOne({
            _id:HotelRoomId
        })
        if(!existingHotelRoom) req.status(403).json({
            success:false,
            message:"HotelRoom to edit do not exist"
        })
        //name is a unique key and should be consistient
        if(updateData.name){
            const existingHotelRoomWithUpdateName = await HotelRoomService.fetchOne({
                name:updateData.name.toLowercase()
            })
            if(existingHotelRoomWithUpdateName._id.toString() !== updateData._id.toString()){
                res.status(403).json({
                    success:false,
                    message:'HotelRoom with updated name already exist'
                })
            }
        }

        const updatedData = await HotelRoomService.update(HotelRoomId,updateData)
        res.status(200).json({
            success: true,
            message: "HotelRoom updated successfully",
            data:updatedData
        })
      
    }
    //Delete a HotelRoom
    async deleteHotelRoom(req,res){
        const HotelRoomId = req.params.id
            // check to see if a deleted HotelRoom is in database
        const existingHotelRoom = await HotelRoomService.fetchOne({
            _id:HotelRoomId
        })

        if(!existingHotelRoom) res.status(403).json(
            {
                success:false,
                message:" HotelRoom to delete does not exist"
            }
        )

        const deletedHotelRoom = await HotelRoomService.delete(HotelRoomId)

        res.status(200).json({
            status:true,
            message:'HotelRoom deleted successfully',
            data: deletedHotelRoom
        })
    }    
    //fetch(find) a HotelRoom
    async fetchOneHotelRoom (req,res){
        const HotelRoomId = req.params.id
        // check if HotelRoom to be deleted is in database
        const existingHotelRoom = await HotelRoomService.fetchOne({
            _id: HotelRoomId
        })

        if(!existingHotelRoom) res.status(401).json({
            success:false,
            message:"HotelRoom to be fetched is not found"
        })


        res.status(200).json({
            success:true,
            message:"HotelRoom fetched successfully",
            data:existingHotelRoom
        })
    }
    async fetchMany(req,res){
        const fetchedHotelRoom = await HotelRoomService.findAll({})

        res.status(200).json({
            success:true,
            message:"Book fetched Successfully",
            data:fetchedHotelRoom
        })
    }
}

module.exports = new HotelController()

