import React, { useState } from 'react';

const Register = ({ headerOpen, toggleHeader }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Aquí iría la lógica de registro
        console.log("Name:", name, "Email:", email, "Username:", username, "Password:", password);
        // Simular registro
        window.location.href = "/accounts"; // Redirige a una ruta protegida
    };

    return (
        <form className="p-4 rounded-lg text-white w-full" onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4">Register</h2>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <label className="block text-sm font-bold mb-2">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                Already have an account? <a href="/login" className="text-blue-500">Log In</a>
            </p>
        </form>
    );
};

export default Register;
