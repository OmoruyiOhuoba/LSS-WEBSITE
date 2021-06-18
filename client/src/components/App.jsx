import React from "react";
import "../App.css";
import {Router, Route, Switch} from "react-router-dom";
import history from "../history";

import Home from "./Home";
import Leadership from "./Leadership";
import Gallery from "./Gallery";
import Contact from "./Contact";
import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Articles from "./Articles";
import HonourRoll from "./HonorRoll";

const App = () =>{
    return(
        <div>
        <Router history={history}>
                <NavBar /> 
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/leadership" component={Leadership} />
                    <Route path="/activities" component={Gallery} />
                    <Route path="/articles" component={Articles}/>
                    <Route path="/honourroll" component={HonourRoll}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                
                <Footer />
            </Router>
        </div>
     
    )
}

export default App;

