import React from "react";
import Logo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";
import pres from "../assets/president.jpg";
import vicepres from "../assets/vice-president.jpg";
import tre from "../assets/tre.jpg";
import gs from "../assets/gs.jpg";
import ags from "../assets/ags.jpg";
import pro from "../assets/pro.jpg";
import dos from "../assets/dos.jpg";
import ados from "../assets/ados.jpg";
import fs from "../assets/fs.jpg";
import afs from "../assets/afs.jpg";
import wd from "../assets/wd.jpg";
import awo from "../assets/awo.jpg";
import leaders from "../assets/leaders.jpg";



const Leadership = () => {
    return (
    <div>
            <div className="top-of-third-division arc">

            </div>
            <div className= "third-division">

            <h1 className="contact-h1">Our Leaders.</h1>
            <br />
            <br />
            <br />

            <div className="news">
            <img className="newsImg cartoon" src={pres} alt="logo "/>
            <div className="leader">

           
            <h2>President</h2>
            <p className="leader-p"> Buchi Ofulue</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={vicepres} alt="gossip "/>
            <div className="leader">

           
        <h2>Vice President</h2>
        <p className="leader-p"> Andrea Okey-Ehieze</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={tre} alt="logo "/>
            <div className="leader">

           
            <h2>Treasurer</h2>
            <p className="leader-p">Obinna Okolie</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={gs} alt="gossip "/>
            <div className="leader">

           
        <h2>General Secretary</h2>
        <p className="leader-p">Damilola Yusuf</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={ags} alt="logo "/>
            <div className="leader">

           
            <h2>Assistant General Secretary</h2>
            <p className="leader-p">Jaja Princess</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={pro} alt="gossip "/>
            <div className="leader">

           
        <h2>Public Relations Officer</h2>
        <p className="leader-p"> Amina Zamani</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={dos} alt="logo "/>
            <div className="leader">

           
            <h2>Director of Socials</h2>
            <p className="leader-p"> Keghku Anne-Mary</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={ados} alt="gossip "/>
            <div className="leader">

           
        <h2>Assistant Director of Socials</h2>
        <p className="leader-p"> Raymond Chinda</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={fs} alt="logo "/>
            <div className="leader">

           
            <h2>Financial Secretary</h2>
            <p className="leader-p"> Savier Esenowo</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={afs} alt="gossip "/>
            <div className="leader">

           
        <h2>Assistant Financial Secretary</h2>
        <p className="leader-p">Favour Ovokeroh</p>
</div>
        </div>
        <div className="news">
            <img className="newsImg cartoon" src={wd} alt="logo "/>
            <div className="leader">

           
            <h2>Welfare Director</h2>
            <p className="leader-p"> Ilya-Ezekiel Ndatse</p>
            </div>
            </div>
        
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={awo} alt="gossip "/>
            <div className="leader">

           
        <h2>Assistant Welfare Director</h2>
        <p className="leader-p"> Nwugo Shiloh</p>
</div>
        </div>
    
    <br/>
    </div> 
        <div className="bottom-of-third-division arc">

        </div>
    </div>
    )
}

export default Leadership;