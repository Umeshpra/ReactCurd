const mongoose = require('mongoose')
// const url = 'mongodb://127.0.0.1:27017/reactapi'

const LiveUrl = 'mongodb+srv://umeshprajapati1996:LQYgpkU4llzIdGZ3@cluster0.j8f7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectdb = ()=>{
    return mongoose.connect(LiveUrl)
    .then(()=>{
        console.log('connected db')
    })
   .catch((error)=>{
    console.log(error)
   })
}
module.exports = connectdb;