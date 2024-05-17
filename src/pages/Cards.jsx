import React from 'react'
import Card from '../components/Card';
import { Carousel } from "flowbite-react";

const Cards = () => {

    return (
        <>
            <h1 className='text-3xl text-white font-bold'>Your Cards</h1>
            <div className='flex flex-col flex-wrap md:flex-row justify-center content-center'>
                <div>
                    <h2 className='text-xl text-white font-bold'>Credit</h2>
                    <Card color="SILVER"></Card>
                    <Card color="GOLD"></Card>
                    <Card color="TITANIUM"></Card>
                </div>
                <div>
                    <h2 className='text-xl text-white font-bold'>Debit</h2>
                    <Card color="SILVER"></Card>
                    <Card color="GOLD"></Card>
                    <Card color="TITANIUM"></Card>
                </div>
            </div>
            <div className="h-44">
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

export default Cards