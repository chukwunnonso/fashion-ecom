import React from "react";
import image from "../../assets/hero-bottom.png"

const BottomHero = () => {
    return(
        // Not yet responsive
        <div className="lg:relative mt-20 w-full">
            <img className="image" src={image} alt="big-image" />
            <div className="lg:absolute  top-30 lg:left-40 lg:right-20 bottom-20">
                <p className="text-black text-sm font-normal leading-6">OWN THE DAY</p>
                <p className="text-black text-2xl lg:text-6xl font-bold">TACHEN 19</p>
                <button className="text-center button bg-black :text-sm">SHOP COLLECTION</button>
            </div>
        </div>
    )
}

export default BottomHero
