const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Student'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
        console.log('connected...')
})

app.use(express.json())

const studentRouter = require('./routes/students-routes')
app.use('/students',studentRouter)


app.listen(9000, () => {
    console.log('Server started')
})
