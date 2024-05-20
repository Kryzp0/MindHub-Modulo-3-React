import React from 'react'
import { HiUser } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { GiTakeMyMoney, GiExitDoor } from "react-icons/gi";
import Links from './Links';

const Header = ({ headerOpen }) => {
    return (
        <header className={"flex flex-col h-full md:rounded-lg md:w-[300px] p-10 items-center justify-around bg-[#1f2937] fixed md:left-8 md:top-8 md:h-[90%] z-20 transition-transform duration-300 ease-in-out" + (headerOpen ? "" : " -translate-x-[600px]")}>
            <div className="my-8 flex justify-center w-full">
                <img src="/logo.png" alt="Logo" className="w-3/5" />
            </div>
            <nav className="flex flex-col items-center w-full gap-2 pt-2">
                <Links linkTo={"/accounts"}>
                    <HiUser />Accounts
                </Links>
                <Links linkTo={"/cards"}>
                    <FaCreditCard />Cards
                </Links>
                <Links linkTo={"/transaction"}>
                    <GoArrowSwitch />Transaction
                </Links>
                <Links linkTo={"/loans"}>
                    <GiTakeMyMoney />Loans
                </Links>

            </nav>
            <Links linkTo={"/"}>
                <GiExitDoor />Log Out
            </Links>
        </header>



    )
}

export default Header