import axios from 'axios';
import React, { useState } from 'react';

const Register = ({ headerOpen, toggleHeader, onLoginClick }) => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("FirstName:", firstName,"LastName:", lastName, "Email:", email, "Password:", password);
        const response = await axios.post('http://localhost:8080/api/auth/signup', { firstName, lastName, email, password });
        console.log(response);
    };

    return (
        <form className="p-4 rounded-lg text-white w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4">Register</h2>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                    className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-[#111827] shadow appearance-none border border-[#4a6382] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
            </div>
            <p className="mt-4">
                Already have an account? <a className="text-blue-500 cursor-pointer" onClick={onLoginClick}>Log In</a>
            </p>
        </form>
    );
};

export default Register;
