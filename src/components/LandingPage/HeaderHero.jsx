import React from "react";
import "./HeaderHero.css";
import image from '../../assets/Hero-top.png'

const HeaderHero = () => {
    return(
        <div className="hero-container">
            <img className="image" src={image} alt="big-image" />
            <div className="text-container">
                <p className="header">COLLUSION</p>
                <p className="paragraph">An exclusive selection of this season's trends.</p>
                <div className="flex flex-row">
                    <button className="button">DISCOVER</button>
                    <button className="button">SHOP NOW</button>
                </div>
            </div>            
        </div>
    )
}

export default HeaderHero