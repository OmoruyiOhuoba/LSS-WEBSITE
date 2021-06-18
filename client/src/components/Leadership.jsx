import React from "react";
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
import judiciary from "../assets/judiciary.jpeg";
import legislature from "../assets/legislature.jpeg";




const Leadership = () => {
    return (
    <div>
            <div className="top-of-third-division arc">

            </div>
            <div className= "third-division">

            <h1 className="contact-h1">Our Leaders.</h1>
            <br />
            <br />
            <h1>The Executive</h1>
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
            <img className="gossipImg cartoon" src={vicepres} alt="law "/>
            <div className="leader">

           
        <h2>Vice President</h2>
        <p className="leader-p"> Andrea Okey-Ehieze</p>
</div>
        </div>
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="newsImg cartoon" src={gs} alt="law "/>
            <div className="leader">

           
        <h2>General Secretary</h2>
        <p className="leader-p">Damilola Yusuf</p>
</div>
        </div>
        <div className="news">
            <img className="gossipImg cartoon" src={ags} alt="law "/>
            <div className="leader">

           
            <h2>Assistant General Secretary</h2>
            <p className="leader-p">Jaja Princess</p>
            </div>
            </div>
        <div className="news">
            <img className="newsImg cartoon" src={tre} alt="law "/>
            <div className="leader">

           
            <h2>Treasurer</h2>
            <p className="leader-p">Obinna Okolie</p>
            </div>
            </div> 
        <div className="gossip">
            <br/>
            <br/>
            <br/>
            <img className="gossipImg cartoon" src={pro} alt="law "/>
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
            <img className="gossipImg cartoon" src={ados} alt="law "/>
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
            <img className="gossipImg cartoon" src={afs} alt="law "/>
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
            <img className="gossipImg cartoon" src={awo} alt="law "/>
            <div className="leader">

           
        <h2>Assistant Welfare Director</h2>
        <p className="leader-p"> Nwugo Shiloh</p>
</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
        <div>

        <h1>The Judiciary</h1>
        <br />
        <br />
        <br />
        <br />
        <img src={judiciary} alt="judiciary" className="fit-image"/>
        <br />
        <br />
        <br />
        <br />
        <p className="gallery-p">L-R (seated)- Chukwunweike Araka (Judge), Halima Adeola-Bello (Judge), Amara Ojiaka (Judge), Boluwatife Olawole (Judge), Amber Douglas (Judge), Peace Bayiere (Judge), Ebele Okonkwo (Chief Judge), Timisayo Oyinlola (Judge), Precious Adewoyin (Clerk), Maria Aleyee (Clerk), Virtue Anyakwe (Clerk), Adebola Oriolowo-Niyi (Clerk), Jehovakeno Ogwerel (Clerk)

L-R (standing)- Abdulazeez Abiodun, Ademola Anointing (Chief Registrar), Favour Ogunleye (Clerk), George Ukuku (Clerk)</p>


        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
        <div>

        <h1>The Legislative House</h1>
        <br />
        <br />
        <br />
        <br />
        <img src={legislature} alt="legislature" className="fit-image"/>
        <br />
        <br />
        <br />
        <br />
        <p className="gallery-p">L-R Seyi Soyoola, Boma Lambert, Bolarinwa Lebile (Clerk), Rasheed Aro, Kolawole Adebayo, Mark Chuku, Abimifoluwa Ogedengbe (Sergeant at Arms), Ogaga Odjugo. Hakima Ishola , Harriet Fufeyin, Anne Obieze
Folakemi Aiyedogbon (Chief Whip), Kenechukwu Ibekwe, Ebuka Ewenike (Speaker), Emeka Anyanwu (Deputy Speaker), Jemimah Adio.</p>
<br />
        <br />
        <br />
        <br />
<br />
        <br />
        </div>
    
    <br/>
    </div> 
        <div className="bottom-of-third-division arc">

        </div>
    </div>
    )
}

export default Leadership;