const nodemailer = require('nodemailer');
let =  smtpTransport = require('nodemailer-smtp-transport');
const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);

smtpTransport = nodemailer.createTransport(smtpTransport({
  host: 'smtp.gmail.com',
  secure: 587,
  port: 587,
  auth: {
    user: 'joshuaadisa161202@gmail.com',
    pass:'afgrpkpbwbpnhhzs'
  }
}));

const sendMail = async () => {
    let html = await readFile('login.html', 'utf8');
    let template = handlebars.compile(html);
    let data = {
        username: "data"
    };
    let htmlToSend = template(data);
    let mailOptions = {
        from: 'from@data.com',
        to :'joshuaadisa161202@gmail.com',
        subject : 'test',
        html : htmlToSend
    };
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);else{
            console.log('Email sent');
        }
    });
}