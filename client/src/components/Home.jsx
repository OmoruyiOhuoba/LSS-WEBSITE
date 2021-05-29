import React from "react";
import Logo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";
import gavel from "../assets/gavel.svg";
import academic from "../assets/academic.svg";
import workingMan from "../assets/working-man.svg";
import education from "../assets/education.svg";
import dancer from "../assets/dancer.svg";
import sport from "../assets/sport.svg";
import compliant from "../assets/compliant.svg";
import law from "../assets/law.svg";
import lawBook from "../assets/law-book.svg";
import courthouse from "../assets/courthouse.svg";

const Home = () =>{
    return(
        <div className="main-container">
            <div className="landing-page">
                <div className="landing-page-text">
                    <h1 className="landing-h1">Truth.</h1>
                    <h1 className="landing-h1">Equality.</h1>
                    <h1 className="landing-h1">Justice.</h1>
                </div>
 
                <div className="rectangle-box">            
                    <p className="statement-title">STATEMENT</p>
                    <div className="rectangle-box-content">
                        
                        <p className="statement-body">Taking over from Buchi Ofulue, Obinna Okolie 
                            has been announced as the new President of LSS. </p>
                    </div>

                </div>
            </div>
            <div id="second-continerId" className="second-container">
                <img className="logo-2Img" src={Logo} alt="intro"/>
                <br/>
                <h2>Who are we?</h2>
                <p className="about-lohi">The Law Students’ Society of Afe Babalola University is 
                    the community of the Law Students of the University. The society, headed by a 
                    student-led administration, is aimed at creating a sense of oneness within 
                    the student body, and to bring about a lasting impact on the members. We work 
                    toward enriching the Law Students’ experience, and to ensure that each person 
                    on the path of getting a degree in Law from our renowned university leaves with 
                    not only a superb academic record, but a lot of grounding in several aspects of 
                    the Law, many of which might not be taught in the classrooms. The Society is 
                    obligated to making sure that no student feels left out in the full experience 
                    of being a Law student of Afe Babalola University Ado-Ekiti.</p>

            </div>
            
            <div className="top-of-third-container">

            </div>

            <div id="servicesId" className="third-container">
                <h2>Our Activities</h2>
                <div className="services-div">
                    <img className="services-img" src={Logo} alt="diesel"/>
                     
                    <div className="services-text">
                        <h3>Moot Court sessions</h3>
                        <p className="services-p">The LSS Moot Court Session is a Mock trial proceeding aimed at providing Law students with a practical perspective at legal practice. Here, there are two sides (Claimant/Prosecutor and Defendant), as obtainable in a real life litigation proceeding. Our members are usually divided into Chambers (Jus Gentium, Jus Civile, Aequitas, and Jus Naturalis) and any of the two chambers face one another in court based on (usually) fictitious facts in dispute. The LSS Judiciary are in charge of judges (students in this case) who adjudicate the matters and give judgment.</p>
                    </div>   
                </div>

                <div className="services-div sales">         
                    <img className="services-img" src={Logo} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>Academic Discussions</h3>
                        <p className="services-p">We sell and supply products such as Premium Motor Spirit (PMS), 
                            Dual Purpose Kerosene (DPK), Automotive Gas Oil (AGO), Paint, Cosmetics and Detergent Chemicals.
                        </p>
                    </div>
                    
                </div>

                <div className="services-div">
                    <img className="services-img" src={Logo} alt="pipe"/>
                    
                    <div className="services-text">
                        <h3>Internship Placement openings</h3>
                        <p className="services-p"> LoHi Energy is registered with the Nigerian Petroleum Exchange (NIPEX) to provide facilities and equipments to major oil companies operating in the Upstream Sector of the Petroleum Industry.</p>
                    </div>
                    
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={Logo} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>Training Seminars</h3>
                        <p className="services-p">With our outsourcing model, third party 
                            companies vetted by us to perform non-core business functions. 
                            This enables your company to focus on its core competencies, reduce cost and improve efficiency.</p>
                    </div>
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={Logo} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>social events</h3>
                        <p className="services-p">We deliver materials and equipments to offshore 
                            and onshore platforms. LoHi Energy provides optimum security and the fastest delivery time through land and sea transportation.</p>

                    </div>
                </div>

                <div className="services-div">
                    <img className="services-img" src={Logo} alt="diesel"/>
                
                    <div className="services-text">
                         <h3>Sporting Events</h3>
                        <p className="services-p"> We deal in the sale and distribution of back up power solutions from world class brands.</p>

                    </div>
                </div>

            </div>

            <div className="bottom-of-third-container">

            </div>

            <div className="fourth-container">
                <h2>Our Commitment</h2> 
                <div className="card-div">
                <div className="card-container red-red">
                    <img className="cardImg" src={Logo} alt="first-aid"/>
                    <div className="card-text">
                        <h3>Truth</h3>
                        <p className="card-p">The health of workers and the security of the environment is paramount.</p>
                    </div>
                </div>

                <div className="card-container green-green">
                    <img className="cardImg" src={Logo} alt="quality"/>
                    <div className="card-text">
                        <h3>Equality</h3>
                        <p className="card-p">At LoHi Energy, we assure the highest quality of work in all our operations.</p>  
                    </div>
                </div>

                <div className="card-container blue-blue">
                    <img className="cardImg" src={Logo} alt="efficiency"/>
                    <div className="card-text">
                        <h3>Justice</h3>
                        <p className="card-p">We ensure the completion of all projects within stipulated time frames.</p> 
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Home;