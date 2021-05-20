const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact-schema");
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
      port: 587,
      secure: false,
    auth: {
      user: "lssabuad@gmail.com",
      pass: "" 
    }
  });
  
  // verifying the connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take your messages!");
    }
  });
  
  
router.route("/contactus").post((req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `WEBSITE CONTACT-US INFO FROM USER\n\n\n\nName: ${name}\n\nEmail: ${email}\n\nMessage: ${message} `
  
    var mail = {
      from: "lssabuad@gmail.com", 
      to: "lssabuad@gmail.com", 
      subject: "WEBSITE CONTACT-US INFO FROM USER",
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })

     Contact.create(req.body, (error, data) => {
        if(error){
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

module.exports = router;