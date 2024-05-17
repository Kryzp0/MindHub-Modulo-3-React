import React from 'react'
import { useState,useEffect } from 'react'

const Card = ({ color }) => {
    
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
        <div className={classColor +  " w-[330px] border-white border h-[220px] rounded-3xl relative z-5"}>
            <img className='h-[60px] w-[70px] absolute top-[25px] left-[40px] z-10' src="/chip.png" alt="" />
        </div>
    )
}

export default Card