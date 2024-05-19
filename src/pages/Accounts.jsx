import React from 'react'
import Title from '../components/Title'
import { Carousel} from "flowbite-react";
import Account from '../components/Account';
import GetBanner from '../components/GetBanner';

const Accounts = () => {
    return (
        <>
            <Title title="Welcome, Melba!" />
            <section className='flex flex-col items-center gap-4'>
                <div className='flex flex-wrap gap-6 pt-[120px]'>
                    <Account number={"VIN001"} amount={"250.000,00"} creationDate={"25/05/23"}/>
                    <Account number={"VIN002"} amount={"200.000,00"} creationDate={"14/07/23"}/>
                </div>
                <GetBanner type={"account"} request={"create"}/>
            </section>
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