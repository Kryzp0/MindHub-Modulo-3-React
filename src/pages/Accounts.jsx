import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Carousel } from "flowbite-react";
import Account from '../components/Account';
import GetBanner from '../components/GetBanner';
import axios from 'axios';

const Accounts = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('http://localhost:8080/api/clients/4')
            .then(response => {
                console.log(response.data.accounts);
                setData(response.data.accounts);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <Title title="Welcome, Melba!" />
            <section className='flex flex-col items-center gap-4'>
                <div className='flex flex-wrap gap-6 pt-[120px] justify-center'>
                    {console.log(data)}
                    {
                        data.length > 0 ?
                            (
                                data.map(account =>
                                    (<Account key={account.id} number={account.number} balance={account.balance} creationDate={account.creationDate} />))
                            ) : (<p className='text-white text-lg'>No accounts available.</p>)
                    }
                </div>
                <GetBanner type={"account"} request={"create"} linkTo={"/accounts"} />
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