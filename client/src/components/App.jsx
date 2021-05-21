import React from "react";
import "../App.css";
import {Router, Route, Switch} from "react-router-dom";
import history from "../history";

import Home from "./Home";
import Directory from "./Directory";
import Gallery from "./Gallery";
import Articles from "./Articles";
import Awards from "./Awards";
import Archives from "./Archives"
import Contact from "./Contact";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";

const App = () =>{
    return(
        <div>
            <Router>
                <NavBar /> 
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/directory" component={Directory} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/articles" component={Articles}/>
                    <Route path="/archives" component={Archives}/>
                    <Route path="/awards" component={Awards}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                
                <Footer />
            </Router>
        </div>
     
    )
}

export default App;

