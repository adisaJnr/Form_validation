let btn = document.getElementById('submit');
btn.addEventListener('click',function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'Name: '+ name + '<br/> Email:' + email+ '<br/> Subject:' + subject + '<br/> Message:'+ message;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "joshuaadisa161202@gmail.com",
        Password : "afgrpkpbwbpnhhzs",
        To : 'joshuaadisa161202@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    ).catch((error)=>{
        console.log(error);
    });
}) 
module.exports = { body };
