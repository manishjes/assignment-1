const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/',services.homeRoutes)
// route.get('/', (req,res)=>{
//     res.render('index')
// })
route.get('/add-course',services.add_course)

route.get('/update-course', services.update_course)
// route.get('/add-course', (req,res)=>{
//     //res.render('add_course')
// })
// route.get('/update-course', (req,res)=>{
//     //res.render('update_course')
// })



//API
route.post('/api/course', controller.create);
route.get('/api/course', controller.find);
route.put('/api/course/:id', controller.update);
route.delete('/api/course/:id', controller.delete);
module.exports = route