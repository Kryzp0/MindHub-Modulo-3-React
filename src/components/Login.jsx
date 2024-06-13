import React, { useState } from 'react';

const Login = ({ headerOpen, toggleHeader }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        console.log("Username:", username, "Password:", password);
        // Simular login
        window.location.href = "/accounts"; // Redirige a una ruta protegida
    };

    return (
            <form className="p-4 rounded-lg text-white" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">Login</h2>
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
                    Don't have an account? <a href="/register" className="text-blue-500">Register</a>
                </p>
            </form>
    );
};

export default Login;