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
      user: "omoruyiwebsitebookings@gmail.com",
      pass: "#1strong*" 
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
  
  
router.route("/contact").post((req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: "omoruyiwebsitebookings@gmail.com", 
      to: "omoruyiwebsitebookings@gmail.com, omoruyi_website_bookings@yahoo.com, omoruyiohuoba@yahoo.com, davidngozi2000@yahoo.com", 
      subject: "WEBSITE BOOKING DETAILS FROM CLIENT",
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