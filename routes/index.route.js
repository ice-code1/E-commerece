const router = require('express').Router()

const hotelRouter = require('./hotel.route')

const testmiddleware = require('../middlewares/test.middlewares')

router.use('/hotel', testmiddleware,hotelRouter)

module.exports = router