const express = require('express');
const { dbConnection } = require('./db/config');
const cors = require('cors')


dbConnection()
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.static('public'));

app.use(express.json())

//Rutas
app.use('/api/comments', require('./routes/comments'))


app.listen(process.env.PORT, ()=>{
    console.log(`Server on Port ${process.env.PORT}`)
})