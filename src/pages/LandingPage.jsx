import React from 'react';
import Title from '../components/Title';
import { Carousel } from 'flowbite-react';
import Links from '../components/Links';

const LandingPage = ({ headerOpen, toggleHeader }) => {
    return (
        <>
            <Title className='mx-10' title="Welcome to GhiBank!" />
            <section className='flex flex-col items-center gap-4'>
                <div className='flex flex-col items-center gap-6 pt-[120px] justify-center text-white'>
                    <h2 className='text-3xl'>Manage Your Finances Seamlessly</h2>
                    <p className='text-lg max-w-3xl text-center'>
                        With our bank, you can easily manage your accounts, cards, loans, and transactions all in one place.
                        Enjoy seamless and secure banking experiences from the comfort of your home.
                    </p>
                    <div className='flex gap-4 mt-4'>
                        <button
                            onClick={toggleHeader}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Log In
                        </button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                Get Started
                            </button>
                    </div>
                </div>
                <div className='h-96 w-full p-6'>
                    <Carousel>
                        <img src="/banner1.jpg" alt="..." className='object-cover h-full w-full' />
                        <img src="/banner2.png" alt="..." className='object-cover h-full w-full' />
                        <img src="/banner3.jpg" alt="..." className='object-cover h-full w-full' />
                        <img src="/banner4.jpg" alt="..." className='object-cover h-full w-full' />
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
