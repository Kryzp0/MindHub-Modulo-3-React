import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Title from '../components/Title';
import GetBanner from '../components/GetBanner';
import axios from 'axios';

const Cards = () => {

    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {

        axios.get('http://localhost:8080/api/clients/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data.cards);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <>
            <Title title="Your Cards" />
            <div className='flex flex-col gap-20 min-h-screen'>
                <article className='flex flex-wrap md:flex-row justify-center content-center justify-evenly pt-20 flex-grow'>
                    <div className='flex flex-col gap-6 py-10'>
                        <h2 className='text-2xl text-white font-bold'>Credit</h2>
                        {
                            data.length > 0 ?
                                (
                                    data.filter(card => card.type == "CREDIT")
                                        .map(card => <Card key={card.id} color={card.color} name={card.cardHolder} number={card.number} validDate={card.thruDate} cvv={card.cvv} />)
                                ) : (<p className='text-white text-lg'>No cards available.</p>)
                        }
                    </div>
                    <div className='flex flex-col gap-6 py-10'>
                        <h2 className='text-2xl text-white font-bold'>Debit</h2>
                        {
                            data.length > 0 ?
                                (
                                    data.filter(card => card.type == "DEBIT")
                                        .map(card => <Card key={card.id} color={card.color} name={card.cardHolder} number={card.number} validDate={card.thruDate} cvv={card.cvv} />)
                                ) : (<p className='text-white text-lg'>No cards available.</p>)
                        }
                    </div>
                </article>
                <GetBanner className='mt-auto' type={"card"} request={"apply"} linkTo={"/apply-card"} />
            </div>
        </>
    )
}

export default Cards