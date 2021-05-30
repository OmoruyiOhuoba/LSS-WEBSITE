import { PromiseProvider } from "mongoose";
import React from "react";

const GalleryProps = (props) => {
    return(
         <div className="grid-item">
                    <img className="grid-img-gallery " src={props.image} alt="logo"/>
                    <div className="grid-text card-text">
                        <p className="grid-p">{props.firstp}</p>
                    </div>
                </div>
    )
}

export default GalleryProps;