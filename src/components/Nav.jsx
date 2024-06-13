import React from 'react'
import { HiUser } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { GiTakeMyMoney, GiExitDoor } from "react-icons/gi";
import Links from './Links';

const Nav = () => {
    return (
        <>
            <nav className="flex flex-col items-center w-full gap-4 pt-2">
                <Links linkTo={"/accounts"} color={'hover:bg-[#374151]'}>
                    <HiUser />Accounts
                </Links>
                <Links linkTo={"/cards"} color={'hover:bg-[#374151]'}>
                    <FaCreditCard />Cards
                </Links>
                <Links linkTo={"/transaction"} color={'hover:bg-[#374151]'}>
                    <GoArrowSwitch />Transaction
                </Links>
                <Links linkTo={"/loans"} color={'hover:bg-[#374151]'}>
                    <GiTakeMyMoney />Loans
                </Links>
                <Links linkTo={"/"} color={'hover:bg-[#DC2626]'}>
                    <GiExitDoor />Log Out
                </Links>
            </nav>
        </>
    )
}

export default Nav