/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.post('/send',function (req, res, next){
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'kiran.kallepu@gmail.com',
            pass:'kishore12#'
        }
    });
    var mailOptions={
        from:'kiran <kiran.kallepu@gmail.com>',
        to: 'kiran.kallepu@gmail.com',
        subject: 'Web site submission',
        text:'You have a new submission with the fallowing details'+req.body.name+ 'Email: '+req.body.email+ 'Message: '+req.body.message,
        html: '<p> You have a new submission with the fallowing details..</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+ '</li><li>Message : '+req.body.message+'</li></ul>'
        
    };
    transporter.sendMail(mailOptions,function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message Sent: '+ info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;

