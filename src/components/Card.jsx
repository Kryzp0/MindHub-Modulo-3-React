import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({ color,name,number,cvv,validDate }) => {

    const [classColor, setClassColor] = useState("");

    useEffect(() => {
        switch (color) {
            case "GOLD":
                setClassColor("bg-gradient-to-r from-yellow-500 to-yellow-300");
                break;
            case "SILVER":
                setClassColor("bg-gradient-to-r from-gray-500 to-gray-300");
                break;
            case "TITANIUM":
                setClassColor("bg-gradient-to-r from-gray-900 to-gray-700");
                break;
            default:
                setClassColor("bg-[#ddd5d5]");
                break;
        }
    }, [color]);

    return (
        <div className={classColor + " w-[330px] border-white border h-[220px] rounded-3xl relative z-5 flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-4"}>
            <img className='h-[50px] w-[60px] absolute top-[25px] left-[30px] z-8' src="/chip.png" alt="" />
            <p class="text-2xl font-medium">{number}</p>
            <div class="flex justify-between gap-10">
                <p class="text-lg font-medium">{name}</p>
                <div class="flex-1 flex flex-col justify-end">
                    <p class="self-end">Valid Date</p>
                    <p class="self-end">{validDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Card