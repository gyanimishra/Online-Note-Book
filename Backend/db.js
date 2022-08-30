

const mongoose = require('mongoose')
require("dotenv").config()
 const PORT= process.env



const connecttoMongo = ()=>{
    mongoose.connect(PORT.DB_CONNECT)
.then(()=>console.log("database connected"))
.catch(err=> console.log(err))
}





module.exports= connecttoMongo

