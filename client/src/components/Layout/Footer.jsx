import React from "react";

const Footer = () =>{
    return (
   <div className="bottom-container">
       <br />
      <br />
     <a className="footer-link" href="https://www.google.com/maps/dir//Abuad,+Ado+Ekiti/@7.6066168,5.2986717,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1047e5d9316ea439:0xa350e0bec1094ce!2m2!1d5.3076366!2d7.6088708" target="_blank" rel="noopener noreferrer">Address</a>
     <a href="tel:+2348065564593"className="footer-link" target="_blank" rel="noopener noreferrer">Contact</a> 
     <a className="footer-link" href="mailto:lss.abuad.edu.ng?subject=CONTACT MESSAGE FROM YOUR LSS WEBSITE" target="_blank " rel="noopener noreferrer">Email</a>
    
     <a className="footer-link" href="www.twitter.com/lssabuad" target="_blank" rel="noopener noreferrer">Twitter</a>
     <a href="www.instagram.com/lssabuad"className="footer-link" target="_blank" rel="noopener noreferrer">Linkedin</a> 
     <a className="footer-link" href="mailto:lss.abuad.edu.ng?subject=CONTACT MESSAGE FROM YOUR LSS WEBSITE" target="_blank " rel="noopener noreferrer">Instagram</a>
     <p className="last">© {new Date().getFullYear()} Made by <span className="last-last"><a href="/#about" class="last-last">Omoruyi Ohuoba.</a></span> All Rights Reserved.</p>
   </div>
        )
}

export default Footer;