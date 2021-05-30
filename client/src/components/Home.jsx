import React from "react";
import Logo from "../assets/logo.jpeg";
import {Link} from "react-router-dom";
import gavel from "../assets/gavel3.svg";
import academic from "../assets/academic2.svg";
import workingMan from "../assets/working-man2.svg";
import education from "../assets/education2.svg";
import dancer from "../assets/dancer2.svg";
import sport from "../assets/sport2.svg";
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
                <div className="top-left-pane">
                    <p className="top-left-title">LSS ABUAD</p>
                    <p className="top-left-p">PEOPLE</p>
                    <hr />
                    <p className="top-left-p">SERVICES </p>
                    <hr />
                    <p className="top-left-p">INSIGHTS</p>
                    <hr />
                    <p className="top-left-p">OUR STORY</p>


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
                <br />
                <br />
                <div className="services-div">
                    <img className="services-img" src={gavel} alt="gavel"/>
                     
                    <div className="services-text">
                        <h3>Moot Court sessions</h3>
                        <p className="services-p">The LSS Moot Court Session is a Mock trial proceeding aimed at providing Law students with a practical perspective at legal practice. Here, there are two sides (Claimant/Prosecutor and Defendant), as obtainable in a real life litigation proceeding. Our members are usually divided into Chambers (Jus Gentium, Jus Civile, Aequitas, and Jus Naturalis) and any of the two chambers face one another in court based on (usually) fictitious facts in dispute. The LSS Judiciary are in charge of judges (students in this case) who adjudicate the matters and give judgment.</p>
                    </div>   
                </div>

                <div className="services-div sales">         
                    <img className="services-img" src={academic} alt="academic"/>
                    
                    <div className="services-text">
                        <h3>Academic Discussions</h3>
                        <p className="services-p">The Academic Committee of the LSS (headed by the Vice President of the Society) organizes academic discussions on a regular basis. The Society’s leadership understands that learning does not have to end with lectures taken by lecturers; we believe that academic discussions led by students for students go a long way in improving knowledge in Law and other fields that are relevant to us as lawyers. The Academic Committee organizes symposiums where important legal, economic, and social matters are conversed about by students across all levels. </p>
                    </div>
                    
                </div>

                <div className="services-div">
                    <img className="services-img" src={workingMan} alt="workingMan"/>
                    
                    <div className="services-text">
                        <h3>Internship Placements</h3>
                        <p className="services-p"> The Student Work Experience Scheme is aimed at making students obtain a level of experience in legal practice long before they are called to bar. During the holiday, students will be on internship with any law firm of their choice. Generally, the students are responsible for finding the suitable firm of their choice, but in many cases, the LSS (through the Internship and Scholarship Committee) has helped in securing internship slots in many parts of the country for some of our members. 
                           </p>
                    </div>
                    
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={education} alt="education"/>
                    
                    <div className="services-text">
                        <h3>Training Seminars</h3>
                        <p className="services-p">The LSS has a responsibility of organizing elaborate training seminars for its members who wish to gain knowledge on how to draft their CVs, cover letters, Letter of Application, and other similar documents. We understand the need to acquire these skills early, and how useful it can be to our members, many of whom will apply for internships during their stay in the university. These seminars are sometimes organized by the Internship and Scholarship Committee, and sometimes by the Academic Committee..</p>
                    </div>
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={dancer} alt="dancer"/>
                    
                    <div className="services-text">
                        <h3>Social Events</h3>
                        <p className="services-p">The LSS organizes social events for its members. The Society is deeply invested in ensuring that our members become 360 degree lawyers, and this includes the building of our members’ social lives. The LSS has a Social Director and an Assistant, both of whom head the LSS Social Committee, which is in charge of organizing events for the benefit of our members. Some of these events include Variety Night and Award Night in which there are performances by our members, a display of talent, and giving out of awards. There is also the LSS Party, usually themed differently every year, and held at Alfa Belgore Hall. Finally, there is the Law Dinner, a yearly event where all Law students wine, dine, and have conversations about one another and the Society.</p>

                    </div>
                </div>

                <div className="services-div">
                    <img className="services-img" src={sport} alt="sport"/>
                
                    <div className="services-text">
                         <h3>Sport Competitions</h3>
                        <p className="services-p"> ABUAD has a variety of sports equipment, and at the LSS we try to utilize them as much as possible. The LSS Sports Committee is led by its Sports Director and their Assistant. They have a duty of making arrangements for sporting events for members of the Society.

At the LSS, we participate in the annual Inter-Collegiate Sports Competition, where we compete with other colleges in football, basketball, swimming, volleyball, chess, badminton, table tennis, and more. We also hold our own intra-college competition among every level during our Chambers’ Week and Law Week. More so, every year, in honour of our College’s Provost, we play the Provost’s Cup, where one Level emerges winner after a series of football matches.</p>

                    </div>
                </div>

            </div>

            <div className="bottom-of-third-container">

            </div>

            <div className="fourth-container">
                <h2>Our Commitment</h2> 
                <br />
                <br />
                <div className="card-div">
                <div className="card-container red-red">
                    <img className="cardImg" src={lawBook} alt="lawBook"/>
                    <div className="card-text">
                        <h3>Truth</h3>
                        <p className="card-p"></p>
                    </div>
                </div>

                <div className="card-container green-green">
                    <img className="cardImg" src={compliant} alt="compliant"/>
                    <div className="card-text">
                        <h3>Equality</h3>
                        <p className="card-p"></p>  
                    </div>
                </div>

                <div className="card-container blue-blue">
                    <img className="cardImg" src={law} alt="law"/>
                    <div className="card-text">
                        <h3>Justice</h3>
                        <p className="card-p"></p> 
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Home;