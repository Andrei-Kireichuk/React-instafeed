import React from 'react'
import Spot2 from "../../Img/spot2.png"
import Scenepicture2 from "../../Img/Scenepic2.png"
import Scenemod from "./Scenepic2.module.css"


const Scenepic2 = () => {
    return(
        <div className={Scenemod.containerPicture}>
            <img className={Scenemod.spot} src={Spot2} alt=""/>
            <img className={Scenemod.scenepicture} src={Scenepicture2} alt=""/>
        </div>
        
    )
};

export default Scenepic2;