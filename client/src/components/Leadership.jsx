import React from "react";
import Logo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";


const Leadership = () => {
    return (
        <div>
        <div className="top-of-third-division arc">

        </div>
<div className= "third-division">
        <div className="news">
        <img className="newsImg cartoon" src={Logo} alt="logo "/>
        <h3>News</h3>
        <p> Get all the lastest news first right in the palm of your hands as soon as it breaks. 
            If it's out there, it's right here. Specially suited. Just for you our tatafo!</p>
        </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={Logo} alt="gossip "/>
            <h3> Gossip</h3>
            <p>We got all the juiciest gossip right here. We don't care if the gist is true or false. 
                It's none of our business abeg. Once it trends, it's here fam.</p>
        </div>
        <div className="fashion">
              <br/>
            <br/>
            <img className="fashionImg cartoon"src={Logo} alt="fashion "/>
            <div className="fashionText"><h3>Fashion</h3>
            <p>You know we just had to add this section. We're steady showing you how to drip, 
                you obviously need it smh...</p></div>

            

        </div>
<br/>
</div> 
<div className="bottom-of-third-division arc">

        </div>
    </div>
    )
}

export default Leadership;