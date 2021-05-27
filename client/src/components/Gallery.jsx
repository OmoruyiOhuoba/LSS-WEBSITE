import React from "react";
import battery from "../assets/battery.jpg";
import inverter1 from "../assets/inverter-1.jpg";
import inverter2 from "../assets/inverter-2.png";
import inverter3 from "../assets/inverter-3.png";
import inverter4 from "../assets/inverter-4.jpg";
import inverter5 from "../assets/inverter-5.jpg";
import SecondNavBar from "./Layout/SecondNavBar";
import {Link} from "react-router-dom";


/*make them cards*/
const Products = () => {
    return (
        <div>
        <SecondNavBar />
        <br/>
            <div>
            <h1>Products</h1>
            <br/>
            <p className="p-products">We deal in the sale and distribution of back up power solutions such as batteries and 
                            inverters for world-class brands to support power use in homes and offices across Nigeria.</p>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <img className="grid-img" src={battery} alt="battery"/>
                    <div className="grid-text">
                        <p className="grid-p">Cleon 12V. 200AMP TUBULAR BATTERY	</p>
                        <p className="grid-price"><b>₦110,000.00</b></p>
                    </div>
                    <Link to="/battery"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={inverter1} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 900VA/12V. STATIC CONVERTER	</p>
                        <p className="grid-price"><b>₦45,000.00</b></p>
                    </div>
                    <Link to="/xenon900va"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={inverter2} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 1100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦50,000.00</b></p>
                    </div>
                    <Link to="/xenon1100va"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={inverter3} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 2100VA/12V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦76,000.00</b></p>
                    </div>
                    <Link to="/xenon2100va"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={inverter4} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 3.5KVA/48V. STATIC CONVERTER</p>
                        <p className="grid-price"><b>₦150,000.00</b></p>
                    </div>
                    <Link to="/xenon3.5kva"><button className="grid-button">Buy</button></Link>
                </div>

                <div className="grid-item">
                    <img className="grid-img" src={inverter5} alt="inverter"/>
                    <div className="grid-text">
                        <p className="grid-p">Xenon 5000VA/48V. STATIC CONVERTER  </p>
                        <p className="grid-price"><b>₦270,000.00</b></p>
                    </div>
                    <Link to="/xenon5000va"><button className="grid-button">Buy</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Products;