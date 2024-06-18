import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import ProceedButton from '../components/ProceedButton';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

const ApplyTransaction = () => {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);
    const token = useSelector(store => store.loginReducer.token) || localStorage.getItem('token');
    const navigate = useNavigate();



    const handleFromAccountChange = (e) => {
        setFromAccount(e.target.value);
    };

    const handleToAccountChange = (e) => {
        setToAccount(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    useEffect(() => {

        axios.get('https://homebanking-dife.onrender.com/api/clients/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data.accounts);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

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
                fromAccountNumber: fromAccount,
                toAccountNumber: toAccount,
                amount: amount,
                description: description
            };

            await axios.post('https://homebanking-dife.onrender.com/api/transactions/apply', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            Swal.fire({
                title: 'Applied!',
                text: 'Your transaction has been applied successfully.',
                icon: 'success'
            });
            navigate('/accounts');
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
            <Title title="Apply for a transaction" />
            <section className='flex flex-col items-start gap-4 pt-[120px]'>
                <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
                    <label htmlFor="originatingAccount" className="block mb-2 text-sm font-medium text-white">Originating account</label>
                    <select id="originatingAccount" onChange={handleFromAccountChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-3 px-8 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">- Select your account -</option>
                        {data.map(account => <option key={account.id} value={account.number}>{account.number}</option>)}
                    </select>

                    <label htmlFor="toAccount" className="block mb-2 text-sm font-medium text-white">To Account Number</label>
                    <input type="text" id="toAccount" value={toAccount} onChange={handleToAccountChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-3 px-8 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter to account number" />

                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Amount:</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                            <RiMoneyDollarCircleFill />
                        </span>
                        <input type="number" id="amount" onChange={handleAmountChange} className="text-right rounded-none rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-3 px-8 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your amount" />
                    </div>

                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <textarea id="description" value={description} onChange={handleDescriptionChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-3 px-8 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none" placeholder="Enter description"></textarea>

                    <ProceedButton />
                </form>
            </section>
        </>
    );
};

export default ApplyTransaction;
