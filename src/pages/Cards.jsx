import React from 'react'
import Card from '../components/Card';
import Title from '../components/Title';

const Cards = () => {

    return (
        <>
            <Title title="Your Cards" />
            <div className='flex flex-wrap md:flex-row justify-center content-center justify-evenly pt-20'>
                <div className='flex flex-col gap-6 py-10'>
                    <h2 className='text-2xl text-white font-bold'>Credit</h2>
                    <Card color="TITANIUM" name="MELBA MOREL" number="9876 5432 1098 7654" validDate="4/26/2034" cvv={661}></Card>
                </div>
                <div className='flex flex-col gap-6 py-10'>
                    <h2 className='text-2xl text-white font-bold'>Debit</h2>
                    <Card color="GOLD" name="MELBA MOREL" number="1234 5678 9012 3456" validDate="2/14/2030" cvv={516}></Card>
                </div>
            </div>
        </>
    )
}

export default Cards