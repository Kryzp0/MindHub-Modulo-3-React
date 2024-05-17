import React from 'react'

const Header = ({ headerOpen }) => {
    return (
            <header className={"flex flex-col md:w-[300px] items-center justify-around bg-[#474747] fixed h-full z-20 transition-transform duration-300 ease-in-out" + (headerOpen ? "" : " -translate-x-full")}>
                <div className="my-8 flex justify-center w-full">
                    <img src="/logo.png" alt="Logo" className="w-2/5" />
                </div>
                <nav className="flex flex-col items-center w-full">
                    <a href="#" className="text-2xl py-2 px-4 border border-black w-full text-center">Accounts</a>
                    <a href="#" className="text-2xl py-2 px-4 border border-black w-full text-center">Cards</a>
                    <a href="#" className="text-2xl py-2 px-4 border border-black w-full text-center">Transaction</a>
                    <a href="#" className="text-2xl py-2 px-4 border border-black w-full text-center">Loan</a>
                </nav>
                <button className="bg-red-500 text-white py-4 mt-auto w-full text-xl">Log Out</button>
            </header>

            
    )
}

export default Header