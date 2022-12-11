import React from "react";
import image from "../../assets/hero-bottom.png"

const BottomHero = () => {
    return(
        <div className="relative mt-20">
            <img className="image" src={image} alt="big-image" />
            <div className="absolute top-30 left-40 right-20 bottom-20">
                <p className="text-black text-sm font-normal leading-6">OWN THE DAY</p>
                <p className="text-black text-6xl font-bold">TACHEN 19</p>
                <button className="button bg-black hover:text-sm">SHOP COLLECTION</button>
            </div>
        </div>
    )
}

export default BottomHero

//  import React from "react";
//  import image from "../../assets/hero-bottom.png"
// const BottomHero = () => {
//          return(
//             <div className="relative">
//                 <img src={image} alt="dummy-image" className="w-full" />
//                 <button class="absolute top-0 bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2">Button</button>
//             </div>

//          )
//      }
// export default BottomHero