const router = require('express').Router()

const {
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom,
    fetchOneHotelRoom,
    fetchMany
    } = require('../controllers/hotelControllers')

router.post('/', createHotelRoom)
router.patch('/:id',updateHotelRoom)
router.delete('/:id',deleteHotelRoom)
router.get('/:id',fetchOneHotelRoom)
router.get('/',fetchMany)

module.exports = router