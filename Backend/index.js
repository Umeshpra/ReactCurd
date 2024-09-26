const express = require('express')
const app = express()
const port = 3000
const web = require('./route/web')
const connectdb = require('./db/Connectdb')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


//use cors for api communication in react js
app.use(cors());

//for using files
app.use(fileUpload({useTempFiles:true}))

//for json data in api 
app.use(express.json())

app.use(cookieParser())

//for routing load
app.use('/api', web)

//for datbase connection
connectdb();

app.listen(port,()=>{
    console.log(`server is running on localhost:${port}`)
})