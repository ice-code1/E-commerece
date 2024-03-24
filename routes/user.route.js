const router = require('express').Router()

const {
    userRegistration,
    userLogin,
    fetchUser,
    updateUser,
    deleteUser
    } = require('../controllers/userControllers')

router.post('/register', userRegistration)
router.post('/login',userLogin)
router.get('/:id',fetchUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router