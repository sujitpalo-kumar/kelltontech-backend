//import Express

const express = require('express');
const mongoose =require('mongoose');
const apiroute = require('./routes/api_route')
const cors = require('cors')


//initialize the application
let app = express()

//setup port number
let port = 8080

// send message for ypur localhost
app.use(express.json()) // Set Content Type to JSON

// Send Message for your localhost
app.use('/', apiroute)
app.use(cors())



let url = 'mongodb+srv://sujit12345:kumar@cluster0.7pveg.mongodb.net/kellton-Ecomerce?retryWrites=true&w=majority'


mongoose.connect(url,{useNewUrlParser:true})
.then(()=>{
    console.log('database connected')
}).catch(err => console.log(err))

//lunch the e commerce backend app

app.listen(port,()=>{
    console.log(`runing the ecommerce backend on port:"http://localhost:${port}/`)
})



 