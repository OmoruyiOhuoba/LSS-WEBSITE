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
            <h1>Products</h1>
            <br/>
            <p className="p-products">We deal in the sale and distribution of back up power solutions such as batteries and 
                            inverters for world-class brands to support power use in homes and offices across Nigeria.</p>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="logo"/>
                    <div className="grid-text">
                        <p className="grid-p">Cleon 12V. 200AMP TUBULAR BATTERY	</p>
                        <p className="grid-price"><b>₦110,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 900VA/12V. STATIC CONVERTER	</p>
                        <p className="grid-price"><b>₦45,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 1100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦50,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 2100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦76,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 3.5KVA/48V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦150,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={Logo} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 5000VA/48V. STATIC CONVERTER  </p>
                        <p className="grid-price"><b>₦270,000.00</b></p>
                    </div>
                    <Link to="/"><button className="grid-button">Buy</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Articles;