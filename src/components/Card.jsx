import React from 'react'
import { useState, useEffect } from 'react'

const Card = ({ color, name, number, cvv, validDate }) => {

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
        <div className={classColor + " w-[340px] border-white border h-[230px] rounded-3xl relative z-5 flex flex-col justify-between px-6 py-4 text-white gap-4"}>
            <img className="h-[50px] w-[60px] absolute top-[20px] left-[30px] z-8" src="/chip.png" alt="Chip" />
            <div className="flex flex-col justify-center items-center mt-14">
                <p className="text-2xl font-medium">{number}</p>
            </div>
            <div className="flex justify-evenly gap-4">
                <div className="flex flex-col">
                    <p className="text-sm">CVV</p>
                    <p className="text-lg font-medium">{cvv}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm">Valid Date</p>
                    <p className="text-lg font-medium">{validDate}</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-lg font-medium">{name}</p>
            </div>
        </div>

    )
}

export default Card