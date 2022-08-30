
const connecttoMongo = require('./db')

const express= require('express')
require("dotenv").config()
 const PORT= process.env.PORT
 var cors = require('cors') 
connecttoMongo()
const app= express()
app.use(cors())
app.use(express.json())


////
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))




app.listen(PORT||8080,()=>{
    console.log(`app is running on ${PORT}`);
})