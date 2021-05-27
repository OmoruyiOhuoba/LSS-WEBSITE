import React, {useState} from "react";
import NavBar from "./Layout/NavBar";
import axios from "axios";

const Contact = () => {
    
    const [post, setPost] = useState({
        name: "",
        email: "",
        message:""
    });