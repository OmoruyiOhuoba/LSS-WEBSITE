import React from "react";

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
                        
                        <p className="statement-body">Taking over from Buchi Ofulue, Obinna Okolie has been announced as the new President of LSS. </p>
                    </div>

                </div>
            </div>
            <div id="second-continerId" className="second-container">
                <img className="logo-2Img" src={logo2} alt="intro"/>
                <br/>
                <h2>Who are we?</h2>
                <p className="about-lohi">LoHi Energy is a general contracting and oil services company. We are NIPEX certified and registered by The Department of Petroleum 
                        Resources (DPR); regulators of the Nigerian Oil and Gas industry. With the 
                        DPR certification, we are equipped to deal in the sales and distribution of 
                        petroleum products such as Automotive Gas Oil (Diesel), Premium Motor Spirit 
                        (Petrol), Dual Purpose Kerosene (Kerosene) and Base oil in both onshore and 
                        offshore locations.</p>

            </div>
            
            <div className="top-of-third-container">

            </div>

            <div id="servicesId" className="third-container">
                <h2>Our Services</h2>
                <div className="services-div">
                    <img className="services-img" src={worker} alt="diesel"/>
                     
                    <div className="services-text">
                        <h3>Labour Contracting</h3>
                        <p className="services-p">LoHi Energy has a well developed database of applicants with pre-requisite skills and 
                            experience for the purpose of job placement in various fields and positions when the need arises from our clients in the oil sector.</p>
                    </div>   
                </div>

                <div className="services-div sales">         
                    <img className="services-img" src={diesel} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>Sale of Petroleum and Chemical products</h3>
                        <p className="services-p">We sell and supply products such as Premium Motor Spirit (PMS), 
                            Dual Purpose Kerosene (DPK), Automotive Gas Oil (AGO), Paint, Cosmetics and Detergent Chemicals.
                        </p>
                    </div>
                    
                </div>

                <div className="services-div">
                    <img className="services-img" src={pipe} alt="pipe"/>
                    
                    <div className="services-text">
                        <h3>Supply of Pipes and Valves</h3>
                        <p className="services-p"> LoHi Energy is registered with the Nigerian Petroleum Exchange (NIPEX) to provide facilities and equipments to major oil companies operating in the Upstream Sector of the Petroleum Industry.</p>
                    </div>
                    
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={handshake} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>Outsourcing</h3>
                        <p className="services-p">With our outsourcing model, third party 
                            companies vetted by us to perform non-core business functions. 
                            This enables your company to focus on its core competencies, reduce cost and improve efficiency.</p>
                    </div>
                </div>
                
                <div className="services-div">
                    <img className="services-img" src={truck} alt="diesel"/>
                    
                    <div className="services-text">
                        <h3>Transportation and Logistics</h3>
                        <p className="services-p">We deliver materials and equipments to offshore 
                            and onshore platforms. LoHi Energy provides optimum security and the fastest delivery time through land and sea transportation.</p>

                    </div>
                </div>

                <div className="services-div">
                    <img className="services-img" src={battery} alt="diesel"/>
                
                    <div className="services-text">
                         <h3>Product Distributors</h3>
                        <p className="services-p"> We deal in the sale and distribution of back up power solutions from world class brands.</p>
                            <Link to="/products"><button className="button-2">BUY</button></Link>

                    </div>
                </div>

            </div>

            <div className="bottom-of-third-container">

            </div>

            <div className="fourth-container">
                <h2>Our Commitment</h2> 
                <div className="card-div">
                <div className="card-container red-red">
                    <img className="cardImg" src={firstaid} alt="first-aid"/>
                    <div className="card-text">
                        <h3>Safety</h3>
                        <p className="card-p">The health of workers and the security of the environment is paramount.</p>
                    </div>
                </div>

                <div className="card-container green-green">
                    <img className="cardImg" src={quality} alt="quality"/>
                    <div className="card-text">
                        <h3>Quality</h3>
                        <p className="card-p">At LoHi Energy, we assure the highest quality of work in all our operations.</p>  
                    </div>
                </div>

                <div className="card-container blue-blue">
                    <img className="cardImg" src={efficiency} alt="efficiency"/>
                    <div className="card-text">
                        <h3>Efficiency</h3>
                        <p className="card-p">We ensure the completion of all projects within stipulated time frames.</p> 
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Home;