import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/loginActions';
import { useNavigate } from 'react-router-dom';

const Login = ({ headerOpen, toggleHeader, onRegisterClick }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Username:", email, "Password:", password);
        try {
            const response = await axios.post('https://homebankingapp.onrender.com/api/auth/login', { email, password });
            let token = response.data;
            console.log(response);
            console.log(token);

            localStorage.setItem('token', token);
            localStorage.setItem('loggedIn', 'true');

            dispatch(login(token));

            navigate('/accounts');
        } catch (error) {
            console.log(error);
        }

    };

    return (
            <form className="p-4 rounded-lg text-white" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </div>
                <p className="mt-4">
                    Don't have an account? <a className="text-blue-500 cursor-pointer" onClick={onRegisterClick}>Register</a>
                </p>
            </form>
    );
};

export default Login;
