import React from "react";
import image from "../../assets/hero-bottom.png"

const BottomHero = () => {
    return(
        <div className="relative mt-20 w-full xl:w-1440">
            <img className="image" src={image} alt="big-image" />
            <div className="absolute top-30 lg:left-40 lg:right-20 bottom-20">
                <p className="text-black text-sm font-normal leading-6">OWN THE DAY</p>
                <p className="text-black text-2xl lg:text-6xl font-bold">TACHEN 19</p>
                <button className="button bg-black :text-sm">SHOP COLLECTION</button>
            </div>
        </div>
    )
}

export default BottomHero
