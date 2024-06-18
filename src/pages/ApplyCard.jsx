import React, { useState } from 'react'
import Title from '../components/Title'
import ProceedButton from '../components/ProceedButton'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';


const ApplyCard = () => {
    const [cardType, setCardType] = useState('');
    const [cardColor, setCardColor] = useState('');
    const token = useSelector(store => store.loginReducer.token) || localStorage.getItem('token');
    const navigate = useNavigate();

    const handleCardTypeChange = (e) => {
        setCardType(e.target.value);
    };

    const handleCardColorChage = (e) => {
        setCardColor(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, apply it!'
        });

        if (result.isConfirmed) {
            try {
                const formData = {
                    type: cardType,
                    color: cardColor
                };

                await axios.post('https://homebankingapp.onrender.com/api/clients/current/cards/', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                Swal.fire({
                    title: 'Applied!',
                    text: 'Your card has been applied successfully.',
                    icon: 'success'
                });
                navigate('/cards');
            } catch (error) {
                const errorMessage = error.response.data;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                  });
                console.log(error);
            }
        }
    };

    return (
        <>
            <Title title="Apply for a card" />
            <section className='flex flex-col items-start gap-4 pt-[120px]'>
                <form className="flex flex-col gap-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <label htmlFor="cardType" className="block mb-2 text-sm font-medium text-white">Select card type</label>
                    <select id="cardType" onChange={handleCardTypeChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">- Select your card type -</option>
                        <option>DEBIT</option>
                        <option>CREDIT</option>
                    </select>
                    <label htmlFor="cardColor" className="block mb-2 text-sm font-medium text-white">Select card mermbership (color)</label>
                    <select id="cardColor" onChange={handleCardColorChage} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">- Select your card membership -</option>
                        <option>SILVER</option>
                        <option>GOLD</option>
                        <option>TITANIUM</option>
                    </select>
                    <ProceedButton />
                </form>
            </section>
        </>
    )
}


export default ApplyCard