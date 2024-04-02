const router = require('express').Router()
const authenticate = require('../middlewares/auth.authorise')
const authorise = require("../middlewares/auth.authorise")
const validateRequest = require("../middlewares/validation")
const Joi = require('joi')


const roomSchema = Joi.object({
    name: Joi.string().required(),
    description:Joi.string().required()
})


const {
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom,
    fetchOneHotelRoom,
    fetchMany
    } = require('../controllers/hotelControllers')

router.post('/',validateRequest(roomSchema),authenticate,authorise, createHotelRoom)
router.patch('/:id',authenticate,authorise,updateHotelRoom)
router.delete('/:id',authenticate,authorise,deleteHotelRoom)
router.get('/:id',authenticate,fetchOneHotelRoom)
router.get('/',authenticate,fetchMany)

module.exports = router