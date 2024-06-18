import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { Carousel } from "flowbite-react";
import Account from '../components/Account';
import GetAccount from '../components/GetAccount';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

const Accounts = () => {

    const token = useSelector(store => store.loginReducer.token) || localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        
        axios.get('https://homebankingapp.onrender.com/api/clients/current', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data);
                setAccounts(response.data.accounts);
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
                await axios.post('https://homebankingapp.onrender.com/api/clients/current/accounts/',{}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                Swal.fire({
                    title: 'Applied!',
                    text: 'Your account has been applied successfully.',
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
            <Title title={"Welcome, "+data.name+"!"} />
            <section className='flex flex-col items-center gap-4'>
                <div className='flex flex-wrap gap-6 pt-[120px] justify-center'>
                    {
                        accounts.length > 0 ?
                            (
                                accounts.map(account =>
                                    (<Account key={account.id} id={account.id} number={account.number} balance={account.balance} creationDate={account.creationDate} />))
                            ) : (<p className='text-white text-lg'>No accounts available.</p>)
                    }
                </div>
                <GetAccount handleSubmit={handleSubmit} type={"account"} request={"create"} />
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