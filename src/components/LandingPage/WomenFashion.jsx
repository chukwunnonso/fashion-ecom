import React from "react";
import women from "./WomenArray";

const WomenFashion = () => {
    const displayProduct = women.map(item => {
        return(
            <div key={item.id}>
                <div>
                    <img src={item.src} alt={item.alt} />
                </div>
                <div className="mt-7">
                    <p>{item.brand}</p>
                    <p>{item.title}</p>
                    <div className="flex flex-row">
                        <p className="mr-16 line-through">{item.price}</p>
                        <p>{item.discountedPrice}</p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="mt-24">
            <p className="text-center">WOMEN'S FASHION</p>
            <p className="text-center">Shop our new arrivals from established brands</p>
            <div className="flex mt-7 justify-center">
                <div className="flex flex-row space-x-10">
                    {displayProduct}
                </div>
            </div>
        </div>
    )
}

export default WomenFashion