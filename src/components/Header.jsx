import React from 'react'
import { HiUser } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { GiTakeMyMoney, GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = ({ headerOpen }) => {
    return (
        <header className={"flex flex-col h-full md:rounded-lg md:w-[300px] p-10 items-center justify-around bg-[#1f2937] fixed md:left-8 md:top-8 md:h-[90%] z-20 transition-transform duration-300 ease-in-out" + (headerOpen ? "" : " -translate-x-[600px]")}>
            <div className="my-8 flex justify-center w-full">
                <img src="/logo.png" alt="Logo" className="w-3/5" />
            </div>
            <nav className="flex flex-col items-center w-full gap-2 pt-2">
                <Link to="/accounts" className="text-white text-2xl py-2 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center">
                    <HiUser />Accounts</Link>
                <Link to="/cards" className="text-white text-2xl py-2 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center">
                    <FaCreditCard />Cards</Link>
                <Link to="/" className="text-white text-2xl py-2 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center">
                    <GoArrowSwitch />Transaction</Link>
                <Link to="/loans" className="text-white text-2xl py-2 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center">
                    <GiTakeMyMoney />Loan</Link>

            </nav>
            <a href="#" className="text-white text-2xl mt-auto py-2 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center">
                <GiExitDoor />Log Out
            </a>
        </header>



    )
}

export default Header