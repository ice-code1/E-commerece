const router = require('express').Router()
const authenticate = require('../middlewares/auth.authorise')
const authorise = require("../middlewares/auth.authorise")
const validateRequest = require("../middlewares/validation")
const Joi = require('joi')


const itemSchema = Joi.object({
    name: Joi.string().required(),
    description:Joi.string().required()
})


const {
    createOrder,
    updateOrder,
    deleteOrder,
    fetchOneOrder,
    fetchMany,
    searchOrder
    } = require('../controllers/orderControllers')

router.post('/',validateRequest(itemSchema),authenticate,authorise, createOrder)
router.patch('/:id',authenticate,authorise,updateOrder)
router.delete('/:id',authenticate,authorise,deleteOrder)
router.get('/:id',authenticate,fetchOneOrder)
router.get('/',authenticate,fetchMany)
router.get('/search',searchOrder)
module.exports = router