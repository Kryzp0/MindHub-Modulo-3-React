import React from 'react'

const HeaderButton = ({toggleHeader,headerOpen}) => {

    return (
        <label>
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center fixed top-6 z-30 left-7 md:left-10 md:top-8">
                <input className="hidden peer" type="checkbox" checked={headerOpen} onChange={toggleHeader} />
                <div className="w-[50%] h-[2px] bg-white border rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                <div className="w-[50%] h-[2px] bg-white border rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[50%] h-[2px] bg-white border rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
        </label>
    )
}

export default HeaderButton