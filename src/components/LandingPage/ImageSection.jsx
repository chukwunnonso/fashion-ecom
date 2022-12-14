import React from "react";
import male1 from "../../assets/male1.png"
import female1 from "../../assets/female1.png"
import female2 from "../../assets/female2.png"
import male2 from "../../assets/male2.png"

const ImageSection = () => {
    return(
        <div className="flex lg:flex-row flex-col justify-center mt-5">
            <div className="">{/*Class w-full, make central */}
                <img className="m-3" src={male1} />
                <div className="flex flex-row">
                    <img className="m-3" src={female1} />
                    <img className="m-3" src={female2} />
                </div>
            </div>
            <div className="relative m-3">
                <img className="" src={male2} />
                <div className="absolute bg-black opacity-50 top-0 left-0 bottom-0 right-0"></div>
                <button className= "text-black font-medium opacity-100 hover:opacity-80 rounded-lg px-20 py-1 bg-white absolute left-6 bottom-8">SUMMER</button>
            </div>
        </div>
    )
}

export default ImageSection