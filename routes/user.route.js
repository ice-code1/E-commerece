const router = require('express').Router()

const {
    userRegistration,
    userLogin,
    fetchUser,
    updateUser,
    deleteUser,
    orderCreation,
    updateOrder,
    viewOrder

    } = require('../controllers/userControllers')

router.post('/register', userRegistration)
router.post('/login',userLogin)
router.get('/:id',fetchUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.post('/createOrder', orderCreation)
router.put('/updateOrder/:id',updateOrder)
router.get('/viewOrder/:id',viewOrder)


module.exports = router