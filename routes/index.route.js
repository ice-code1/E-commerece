const router = require('express').Router()


const userRouter = require('./user.route')

const hotelRouter = require('./hotel.route')



const testmiddleware = require('../middlewares/test.middlewares')

router.use('/hotel', testmiddleware,hotelRouter)
router.use('/users', testmiddleware,userRouter)

module.exports = router