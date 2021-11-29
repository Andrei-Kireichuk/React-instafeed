import React from 'react'
import Spot2 from "../../Img/spot3.png"
import Scenepicture2 from "../../Img/Scenepic3.png"
import Scenemodul from "./Scenepic3.module.css"
import Line2 from "../../Img/line2.svg"


const Scenepic3 = () => {
    return(
        <div className={Scenemodul.containerPicture}>
            <img className={Scenemodul.spot} src={Spot2} alt=""/>
            <img className={Scenemodul.scenepicture} src={Scenepicture2} alt=""/>
            <img className={Scenemodul.line} src={Line2} alt=""/>
        </div>
        
    )
};

export default Scenepic3;