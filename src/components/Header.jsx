import React from 'react'
import '../styles/Header.css';

const Header = ({ headerOpen, children }) => {

    return (
        <header className={"custom-scrollbar flex flex-col overflow-y-auto h-full md:rounded-lg md:w-[320px] p-6 items-center gap-4 bg-[#1f2937] fixed md:left-8 md:top-8 md:h-[90%] z-20 transition-transform duration-300 ease-in-out" + (headerOpen ? "" : " -translate-x-[600px]")}>
            <div className="flex justify-center w-full">
                <img src="/logo.png" alt="Logo" className="w-3/5" />
            </div>
            <div className="flex flex-col items-center w-full gap-2 pt-2">
                {children}
            </div>
        </header>
    )
}

export default Header