import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.jpeg";

/*make them cards*/

const Articles = () => {
    return (
        <div>
        <br />
        <br/>
            <div>
            <h1 className="contact-h1">Articles</h1>
            <br/>
            <p className="p-products">Read the latest publications from the Law Student's Society.</p>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="logo"/>
                    <div className="grid-text">
                        <p className="grid-p">Cleon 12V. 200AMP TUBULAR BATTERY	</p>
                        <p className="grid-price"><b>₦110,000.00</b></p>
                    </div>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 900VA/12V. STATIC CONVERTER	</p>
                        <p className="grid-price"><b>₦45,000.00</b></p>
                    </div>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 1100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦50,000.00</b></p>
                    </div>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 2100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦76,000.00</b></p>
                    </div>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 3.5KVA/48V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦150,000.00</b></p>
                    </div>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 5000VA/48V. STATIC CONVERTER  </p>
                        <p className="grid-price"><b>₦270,000.00</b></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Articles;