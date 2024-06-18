import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Carousel } from "flowbite-react";

const AccountDetails = () => {
    const token = useSelector(store => store.loginReducer.token) || localStorage.getItem('token');
    const { id } = useParams();
    const [data, setData] = useState(null); // Datos del cliente
    const [accounts, setAccounts] = useState([]); // Lista de cuentas del cliente
    const [currentAccountIndex, setCurrentAccountIndex] = useState(0); // Índice de la cuenta actual que se está mostrando
    const [transactions, setTransactions] = useState([]); // Transacciones de la cuenta actual

    useEffect(() => {
        axios.get('https://homebankingapp.onrender.com/api/clients/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setData(response.data);
            setAccounts(response.data.accounts);
            // Filtrar la cuenta por ID y obtener las transacciones
            const account = response.data.accounts.find(acc => acc.id === parseInt(id));
            if (account) {
                setTransactions(account.transactions);
                // Encontrar el índice de la cuenta dentro del arreglo accounts
                const index = response.data.accounts.findIndex(acc => acc.id === parseInt(id));
                setCurrentAccountIndex(index);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }, [token, id]);

    const handlePreviousAccount = () => {
        const newIndex = (currentAccountIndex - 1 + accounts.length) % accounts.length;
        setCurrentAccountIndex(newIndex);
        setTransactions(accounts[newIndex].transactions);
    };

    const handleNextAccount = () => {
        const newIndex = (currentAccountIndex + 1) % accounts.length;
        setCurrentAccountIndex(newIndex);
        setTransactions(accounts[newIndex].transactions);
    };

    const account = accounts[currentAccountIndex];

    return (
        <>
            <Title title={`Account Details - ${data ? data.name : ''}`} />
            <section className='flex flex-col items-center gap-4 pt-[140px]'>
                <div className='w-10/12 bg-gray-800 rounded-lg p-6'>
                    <h2 className='text-xl font-bold text-white p-4'>Account Details</h2>
                    <div className='flex items-center justify-between p-2'>
                        <div className='text-white p-2'>
                            <p className='text-lg p-2'>Account Number: {account ? account.number : ''}</p>
                            <p className='text-lg p-2'>Balance: {account ? `$${account.balance.toFixed(2)}` : ''}</p>
                            <p className='text-lg p-2'>Creation Date: {account ? account.creationDate : ''}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button onClick={handlePreviousAccount} disabled={accounts.length <= 1} className='text-white'><BiChevronLeft size={40} /></button>
                            <button onClick={handleNextAccount} disabled={accounts.length <= 1} className='text-white'><BiChevronRight size={40} /></button>
                        </div>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full table-auto divide-y divide-gray-600'>
                            <thead>
                                <tr className='bg-gray-700'>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-white'>Type</th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-white'>Amount</th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-white'>Date</th>
                                    <th className='px-6 py-3 text-left text-xs font-medium text-white'>Description</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-600'>
                                {transactions.map(transaction => (
                                    <tr key={transaction.id} className='bg-gray-800'>
                                        <td className={`px-6 py-4 whitespace-nowrap ${transaction.type === 'CREDIT' ? 'text-green-500' : 'text-red-500'}`}>{transaction.type}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-white'>{`$${transaction.amount.toFixed(2)}`}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-white'>{new Date(transaction.date).toLocaleDateString()}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-white'>{transaction.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <div className="h-48 p-6 mt-auto">
                <Carousel>
                    <img src="/banner1.jpg" alt="..." />
                    <img src="/banner2.png" alt="..." />
                    <img src="/banner3.jpg" alt="..." />
                    <img src="/banner4.jpg" alt="..." />
                </Carousel>
            </div>
        </>
    );
};

export default AccountDetails;
