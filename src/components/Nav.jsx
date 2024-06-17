import React from 'react'
import { HiUser } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { GiTakeMyMoney, GiExitDoor } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import Links from './Links';
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/actions/loginActions';

const Nav = ({ setLoginOrRegister }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        setLoginOrRegister(true);
    }

    return (
        <>
            <nav className="flex flex-col items-center w-full gap-4 pt-2">
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
                <NavLink 
                    to={"/"} 
                    onClick={handleLogout}
                    className={({ isActive }) => {
                    return ('text-white text-2xl py-4 px-4 w-full mx-4 flex gap-4 hover:bg-[#DC2626] rounded-xl transition-all duration-300 items-center ' +
                        (isActive
                            ? 'bg-[#DC2626]'
                            : '')
                    )
                }}>
                    <GiExitDoor />Log Out
                </NavLink>
            </nav>
        </>
    )
}

export default Nav