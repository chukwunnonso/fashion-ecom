import React from "react";
import image from "../../assets/hero-bottom.png"

const BottomHero = () => {
    return(
        <div className="relative mt-20">
            <img className="image" src={image} alt="big-image" />
            <div className="">
                <p className="">OWN THE DAY</p>
                <p className="">TACHEN 19</p>
                <button className="button">SHOP COLLECTION</button>
            </div>
        </div>
    )
}

export default BottomHero