const express = require('express');

const { Nodemailing } = require('nodemailing');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5500;


const filePath = path.join(__dirname, '/login.html');

app.set('view engine' ,'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('login')
})

data = {
    
  };

  Nodemailing.render(filePath,data).then((emailToSend)=>{
    Nodemailing.send({
        Host: 'smtp.gmail.com',
        Username: 'joshuaadisa161202@gmail.com',
        Password: 'afgrpkpbwbpnhhzs',
        // To:  'joshuaadisa161202@gmail.com',
        From: 'thompsonsolomon123@gmail.com',
        Subject: "Welcome Message",
        Body: emailToSend,
    }) .then((message)=>{
        console.log(message,"Email has been sent");
    }).catch((error)=>{
        console.log(error);
    })
  })

app.listen(5500,()=>{
    console.log(`Connected to server at ${PORT}`);
})

