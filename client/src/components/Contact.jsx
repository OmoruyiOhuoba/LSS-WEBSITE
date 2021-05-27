import React, {useState} from "react";
import NavBar from "./Layout/NavBar";
import axios from "axios";

const Contact = () => {
    
    const [post, setPost] = useState({
        name: "",
        email: "",
        message:""
    });
    
    function handleChange(event){
        const { name, value } = event.target;

        setPost((prevValue) => {
            return{
                ...prevValue, [name]: value
            }
        })
        console.log(post);
    }

   
    function submit(event){
        event.preventDefault();

        axios.post("/api/bookings/contact", post)
        .then((res) => {
            console.log(res.data);
            document.getElementById("myForm").reset();
            alert("Form submitted successfully!\nI appreciate you contacting me. I'll get back in touch with you soon.\nHave a great day.");
        }).catch((error) => {
            console.log(error);
        })
 
    }


    return(<div className ="contactBody">
                <NavBar />
                <br/>
               
            <div>

                <h1>Contact me.</h1>

            </div>
            <div className="contactForm">
            <form id="myForm">
            <div class="input-group">
                 <input type="text" name="name" onChange={handleChange} required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label>Your Name</label>
            </div>

            <div class="input-group">
                <input type="email" name="email" onChange={handleChange} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Your Email</label>
            </div>

            <div class="input-group">
                <input type="text" name="message" onChange={handleChange} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Booking Details</label>
            </div>
            <br/>

            <div className="buttonPosition">
                <button type="submit" onClick={submit}> Submit </button>
                <br/>
                <br/>
              </div>
            </form>
        </div>

        </div>
       
    )
}

export default Contact;