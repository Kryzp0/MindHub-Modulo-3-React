import React from 'react'
import Title from '../components/Title'
import { Carousel } from "flowbite-react";

const Accounts = () => {
    return (
        <>
            <Title title="Welcome, Melba!" />
            <div className='flex flex-wrap md:flex-row justify-center content-center justify-evenly pt-20'>

            </div>
            <div className="h-44 p-6">
                <Carousel>
                    <img src="/banner1.jpg" alt="..." />
                    <img src="/banner2.png" alt="..." />
                    <img src="/banner3.jpg" alt="..." />
                    <img src="/banner4.jpg" alt="..." />
                </Carousel>
            </div>
        </>
    )
}

export default Accounts