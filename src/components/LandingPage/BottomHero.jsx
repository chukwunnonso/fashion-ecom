// import React from "react";
// import image from "../../assets/hero-bottom.png"

// const BottomHero = () => {
//     return(
//         <div className="relative mt-20">
//             <img className="image" src={image} alt="big-image" />
//             <div className="">
//                 <p className="text-black">OWN THE DAY</p>
//                 <p className="text-black">TACHEN 19</p>
//                 <button className="button bg-black">SHOP COLLECTION</button>
//             </div>
//         </div>
//     )
// }

// export default BottomHero


import React from "react";
import image from "../../assets/hero-bottom.png"

const BottomHero = () => {
    return(
        <div className="relative w-[200px]">
        <img src={image}  className="w-max" class="two-ladies" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h2 className="text-lg  font-medium ml-25 ml-2.5" class="own-it">
            OWN THE DAY</h2>
            <h2 className="mt-2 text-2xl text-gray-300" class="tachen">TACHEN 19</h2>
            <button className="button bg-black text-2xl" class="collection">SHOP COLLECTION</button>
        </div>
    </div>
    )
}

export default BottomHero





// <div class="relative">
//         <img src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" />
//         <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             KindaCode.com</h1>
//         <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
//         <h3 class="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3>
//         <h3 class="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3>
//     </div>

 

