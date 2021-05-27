import React from "react";
import battery from "../assets/battery.jpg";
import inverter1 from "../assets/inverter-1.jpg";
import inverter2 from "../assets/inverter-2.png";
import inverter3 from "../assets/inverter-3.png";
import inverter4 from "../assets/inverter-4.jpg";
import inverter5 from "../assets/inverter-5.jpg";
import SecondNavBar from "./Layout/SecondNavBar";
import {Link} from "react-router-dom";


const Products = () => {
    return (
        <div>
        <div className="top-of-third-division arc">

</div>
<div className= "third-division">
        <div className="news">
        <img className="newsImg cartoon" src={News} alt="news "/>
        <h3>News</h3>
        <p> Get all the lastest news first right in the palm of your hands as soon as it breaks. If it's out there, it's right here. Specially suited. Just for you our tatafo!</p>
        </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={Gossip} alt="gossip "/>
            <h3> Gossip</h3>
            <p>We got all the juiciest gossip right here. We don't care if the gist is true or false. It's none of our business abeg. Once it trends, it's here fam.</p>
        </div>
        <div className="fashion">
              <br/>
            <br/>
            <img className="fashionImg cartoon"src={Fashion} alt="fashion "/>
            <div className="fashionText"><h3>Fashion</h3>
            <p>You know we just had to add this section. We're steady showing you how to drip, you obviously need it smh...</p></div>

            

        </div>
<br/>
</div> 
<div className="bottom-of-third-division arc">

        </div>
    )
}

export default Products;