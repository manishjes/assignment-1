// const axios = require('axios');


// exports.homeRoutes = (req,res)=>{
//     //make a get request to /api/course
//     axios.get('http://localhost:8080/api/course')
//     .then(function(response){
//         res.render('index', {course : "response.data"})

//     })
    
// }

// exports.add_course = (req,res)=>{
//     res.render('add_course')
// }
// exports.update_course = (req,res)=>{
//     res.render('update_course')
// }




const axios = require('axios');
const { response } = require('express');

exports.homeRoutes = (req, res) => {
    //make a get request to /api/course
    axios.get('http://localhost:8080/api/course')
        .then(function(response){
            res.render('index',{course: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_course = (req, res) => {
    res.render('add_course');
}

exports.update_course = (req, res) => {
    axios.get('http://localhost:8080/api/course',{ params : { id : req.query.id }})
        .then(function(coursedata){
            //console.log(response.data);
            res.render("update_course",{ course: coursedata.data});
        })
        .catch(err =>{
            res.send(err);
        })
}