import React from "react";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";



const HonourRole = () => {
    return (
    <div>
            <div className="top-of-third-division arc">

            </div>
            <div className= "third-division">

            <h1 className="contact-h1">Past Leaders.</h1>
            <br />
            <br />
            <br />

            <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="newsImg cartoon" src={p4} alt="law "/>
            <div className="leader">

           
        <h2>2015/2016 Judge & 2016/2017</h2>
        <p className="leader-p"> Usifo Emoyon-Iredia</p>
        <p className="leader-p"> LinkedIn: Usifo Emoyon-Iredia </p>

</div>
        </div>

   
        
     
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={p2} alt="law "/>
            <div className="leader">

           
        <h2>2016/2017 Speaker</h2>
        <p className="leader-p">Obinna Ekomaru Esq</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={p1} alt="logo "/>
            <div className="leader">

           
            <h2>2017/2018 Speaker</h2>
            <p className="leader-p">Precious Ufedo-Ojo Okeme</p>
            <p className="leader-p"> Social media: Preshiiee_ </p>
            </div>
            </div>

            <div className="news">
            <img className="gossipImg cartoon" src={p3} alt="law "/>
            <div className="leader">

           
            <h2>2019/2020 President</h2>
            <p className="leader-p"> Chijioke Ukomadu  </p>
            <p className="leader-p">LinkedIn: Chijioke Ukomadu</p>
            <p className="leader-p">Twitter: Cjay_uk</p>
            <p className="leader-p">Instagram: Cjay_uk </p>
            </div>
            </div>


    
    <br/>
    </div> 
        <div className="bottom-of-third-division arc">

        </div>
    </div>
    )
}

export default HonourRole;