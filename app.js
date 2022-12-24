
const express = require('express');
const { dirname } = require('path');
const bodyParser = require('body-parser');
const date = require(__dirname+ "/dates.js");

const app= express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))


var task= [
        'Buy Food',
        'Cook Food',
        'Eat Food',]


app.get('/', function (req, res) {
    dayy = date.getDate();
    
    res.render('lists', {kindofday : dayy, newtask: task })
}) 

app.post('/', function (req, res) {
    var nwtask = req.body.newtask;
    task.push(nwtask);
    res.redirect('/')
    
    
})


app.listen(3000, function () {
    console.log("Listening to port 3000");    
})