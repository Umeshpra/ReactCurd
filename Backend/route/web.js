const express = require("express");
const TenderController = require("../Controllers/TenderController");
const UserController = require("../Controllers/UserController");
const route = express.Router();

// route.get('/',(req, res)=>{
//   res.send('hello umesh')
// })

//tender route
route.post('/tenderInsert',TenderController.tenderInsert)
route.get('/tenderDisplay',TenderController.tenderDisplay)
route.get('/tenderView/:id',TenderController.tenderView)
route.put('/tenderUpdate/:id',TenderController.tenderUpdate)
route.delete('/tenderDelete/:id',TenderController.tenderDelete)


//user route
route.post('/userInsert',UserController.userInsert)
route.get('/getalluser',UserController.getalluser)
route.get('/userView/:id', UserController.userView)
route.put('/userUpdate/:id',UserController.userUpdate)
route.delete('/userDelete/:id',UserController.userDelete)



module.exports = route;
