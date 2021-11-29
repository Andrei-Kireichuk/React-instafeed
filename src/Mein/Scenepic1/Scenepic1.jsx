import React from 'react'
import Spot1 from "../../Img/spot1.png"
import Scenepicture1 from "../../Img/Scenepic1.png"
import "./Scenepic1.css"


const Scenepic1 = () => {
    return(
        <div className="containerPicture">
            <img className="spot" src={Spot1} alt=""/>
            <img className="scenepicture" src={Scenepicture1} alt=""/>
        </div>
        
    )
};

export default Scenepic1;