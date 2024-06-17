import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({ linkTo, children}) => {
    return (
        <NavLink to={linkTo} className={({ isActive }) => {
            return ('text-white text-2xl py-4 px-4 w-full mx-4 flex gap-4 hover:bg-[#374151] rounded-xl transition-all duration-300 items-center ' +
                (isActive
                    ? 'bg-[#374151]'
                    : '')
            )
        }}>
            {children}
        </NavLink>
    )
}

export default Links