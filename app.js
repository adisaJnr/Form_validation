const express = require('express');

const mongoose = require('mongoose'); 

const { Data } =  require('./models/post')

const {body} = require('./public/login')

const app = express();

const PORT = process.env.PORT || 5500;

//middlesware
app.set('view engine' ,'ejs');

app.use(express.static('public'));


app.use(express.urlencoded({extended: true}))

dbURI = 
       ''


app.post('/submit',(req,res)=>{

})
app.get('/',(req,res)=>{
    res.render('login')
})

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
})