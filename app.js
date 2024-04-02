const express = require('express')

const app = express()
const userRoutes = require('./routes/user.route')
const hotelRoutes = require('./routes/hotel.route')
const router = require('./routes/index.route')
const mongoose = require('mongoose')

require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/users',userRoutes)

app.use('/api/hotel',hotelRoutes)
app.use('/api/v3',router)
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log(" successfully connected to Database")
})
.catch(() => {
    console.log('there was an issue trying to connect to database')
})

const port = process.env.PORT || 3838

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})