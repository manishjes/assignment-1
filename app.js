const express = require("express");
const dotenv = require("dotenv")
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require("path")

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})

const PORT = process.env.PORT ||8080

// log request
app.use(morgan('tiny'))

// mongodb connection
connectDB();

//log request
app.use(morgan('tiny'))

//parse request for body parser

app.use(bodyparser.urlencoded({extended: true}))

// view engine 
app.set("view engine", "ejs")

// load assets

app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))


// app.get('/', (req,res)=>{
//     res.render('index')
// })
// app.get('/add-course', (req,res)=>{
//     res.render('add_course')
// })
// app.get('/update-course', (req,res)=>{
//     res.render('update_course')
// })

app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>
{
   console.log(`server is runnig on http://localhost:$(PORT)`);
})

