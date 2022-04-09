const express = require('express');

// const nodemailer = require('nodemailer');


const app = express();

const PORT = process.env.PORT || 5500;

//middlesware
app.set('view engine' ,'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('login')
})

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
})