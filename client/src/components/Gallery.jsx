import React from "react";
import GalleryProps from "./GalleryProps";
import a1 from "../assets/1.jpg";
import a2 from "../assets/2.jpg";
import a3 from "../assets/3.jpg";
import a4 from "../assets/4.jpg";
import a5 from "../assets/5.jpg";
import a6 from "../assets/6.jpg";
import a7 from "../assets/7.jpg";
import a8 from "../assets/8.jpg";
import a9 from "../assets/9.jpg";
import a10 from "../assets/10.jpg";
import a11 from "../assets/11.jpg";
import a12 from "../assets/12.jpg";
import a13 from "../assets/3.jpg";
import a14 from "../assets/14.jpg";
import a15 from "../assets/5.jpg";
import a16 from "../assets/16.jpg";
import a17 from "../assets/17.jpg";
import a18 from "../assets/18.jpg";
import a19 from "../assets/19.jpg";
import a21 from "../assets/21.jpg";
import a22 from "../assets/22.jpg";
import a23 from "../assets/23.jpg";
import a24 from "../assets/24.jpg";
import a25 from "../assets/25.jpg";
import a26 from "../assets/26.jpg";
import a27 from "../assets/27.jpg";
import a28 from "../assets/28.jpg";
import a29 from "../assets/29.jpg";
import a30 from "../assets/30.jpg";
import a31 from "../assets/31.jpg";
import a32 from "../assets/32.jpg";
import a33 from "../assets/33.jpg";
import a34 from "../assets/34.jpg";
import a35 from "../assets/35.jpg";
import a36 from "../assets/36.jpg";
import a37 from "../assets/37.jpg";
import a38 from "../assets/38.jpg";
import a39 from "../assets/39.jpg";
import a40 from "../assets/40.jpg";
import a41 from "../assets/41.jpg";
import a42 from "../assets/42.jpg";
import a43 from "../assets/43.jpg";
import a44 from "../assets/44.jpg";


/*make them cards*/



const Gallery = () => {
    return (
        <div>
        <br/>
                <br />
                <br />
                <br />
            <div>
            <h1 className="contact-h1">Activities</h1>
            <br/>
            <br />
            

            <br />
            <br />
            </div>
            <div>
                <h2>Moot Court Sessions</h2>
                <p className="gallery-p">The LSS Moot Court Session is a Mock trial proceeding aimed at providing Law students with a practical perspective at legal practice. Here, there are two sides (Claimant/Prosecutor and Defendant), as obtainable in a real life litigation proceeding. Our members are usually divided into Chambers (Jus Gentium, Jus Civile, Aequitas, and Jus Naturalis) and any of the two chambers face one another in court based on (usually) fictitious facts in dispute. The LSS Judiciary are in charge of judges (students in this case) who adjudicate the matters and give judgment.</p>

                            <div className="grid-container">
                <GalleryProps image={a1} firstp="" />
                <GalleryProps image={a2} firstp="" />
                
                <GalleryProps image={a11} firstp="" />
                <GalleryProps image={a12} firstp="" />
                <GalleryProps image={a14} firstp="" />
                <GalleryProps image={a16} firstp="" />
                <GalleryProps image={a17} firstp="" />
                <GalleryProps image={a18} firstp="" />
                <GalleryProps image={a22} firstp="" />
               
                
                <GalleryProps image={a28} firstp="" />
                <GalleryProps image={a29} firstp="" />
                <GalleryProps image={a30} firstp="" />
                <GalleryProps image={a31} firstp="" />
                <GalleryProps image={a32} firstp="" />
                <GalleryProps image={a33} firstp="" />
                <GalleryProps image={a34} firstp="" />
                <GalleryProps image={a35} firstp="" />
                <GalleryProps image={a36} firstp="" />
                <GalleryProps image={a37} firstp="" />
                <GalleryProps image={a38} firstp="" />
                <GalleryProps image={a39} firstp="" />

            

  
           
            </div>
            </div>

            <div>
                <h3>Sports Competitions</h3>
                <p className="gallery-p">ABUAD has a variety of sports equipment, and at the LSS we try to utilize them as much as possible. The LSS Sports Committee is led by its Sports Director and their Assistant. They have a duty of making arrangements for sporting events for members of the Society.

At the LSS, we participate in the annual Inter-Collegiate Sports Competition, where we compete with other colleges in football, basketball, swimming, volleyball, chess, badminton, table tennis, and more. We also hold our own intra-college competition among every level during our Chambers’ Week and Law Week. More so, every year, in honour of our College’s Provost, we play the Provost’s Cup, where one Level emerges winner after a series of football matches.</p>
    <div className="grid-container">
                <GalleryProps image={a3} firstp="" />
                <GalleryProps image={a4} firstp="" />
                <GalleryProps image={a5} firstp="" />
                <GalleryProps image={a6} firstp="" />
                <GalleryProps image={a7} firstp="" />
                <GalleryProps image={a8} firstp="" />
                <GalleryProps image={a9} firstp="" />
                <GalleryProps image={a10} firstp="" />
                <GalleryProps image={a24} firstp="" />

                <GalleryProps image={a13} firstp="" />
                <GalleryProps image={a15} firstp="" />
                <GalleryProps image={a23} firstp="" />
                <GalleryProps image={a25} firstp="" />
                <GalleryProps image={a26} firstp="" />
                <GalleryProps image={a27} firstp="" />




            </div>
            
            </div>
            
            <div>
                <h3>Academic Discussions</h3>
                <p className="gallery-p">The Academic Committee of the LSS (headed by the Vice President of the Society) organizes academic discussions on a regular basis. The Society’s leadership understands that learning does not have to end with lectures taken by lecturers; we believe that academic discussions led by students for students go a long way in improving knowledge in Law and other fields that are relevant to us as lawyers. The Academic Committee organizes symposiums where important legal, economic, and social matters are conversed about by students across all levels. .</p>
                <div className="grid-container">
                <GalleryProps image={a44} firstp="" />
                <GalleryProps image={a41} firstp="" />
                <GalleryProps image={a42} firstp="" />
                <GalleryProps image={a43} firstp="" />
               




            </div>
            
            </div>

        </div>
    )
}

export default Gallery;


