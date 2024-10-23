const router = require('express').Router()


const userRouter = require('./user.route')

const orderRouter = require('./order.route')



const testmiddleware = require('../middlewares/test.middlewares')

router.use('/order', testmiddleware,orderRouter)
router.use('/users', testmiddleware,userRouter)

module.exports = router