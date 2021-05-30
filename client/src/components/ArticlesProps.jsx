import React from "react";


const ArticlesProps = (props) => {
    return(
         <div className="grid-item">
                    <img className="grid-img " src={props.image} alt="logo"/>
                    <div className="grid-text card-text">
                        <p className="grid-p">{props.firstp}	</p>
                        <p className="grid-price">{props.secondp}</p>
                    </div>
                </div>
    )
}

export default ArticlesProps;