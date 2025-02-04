import React, { useState, useEffect } from 'react';
import { WiAlien } from "react-icons/wi";

export default function Login(props) {
    const handleLogin = props.handleLogin;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="h-screen flex flex-col justify-between"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(173, 216, 230, 0.2), rgba(0, 0, 0, 0.8))`,
                transition: 'background 0.1s ease',
            }}
        >
          
            <header className="w-full pt-6 bg-black-500 text-white flex justify-center items-center">
               
                    <WiAlien size={200} className='text-gray-600' />

                 
            </header>

            
            <div className="flex justify-center items-start p-8 grow">
    <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 sm:w-[500px] gap-8 p-10 border-2 border-gray-300 rounded-lg shadow-2xl bg-[#e1e0e0]"
    >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>

        <label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2">Your E-Mail:</label>
        <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border-2 shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
        />
        
        <label htmlFor="password" className="text-lg text-gray-700 font-semibold mb-2"> Password:</label>
        <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 border-2 shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
        />
        
        <button className="p-3 mt-8 bg-gray-500 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
            Login
        </button>
    </form>
</div>

        </div>
    );
}
