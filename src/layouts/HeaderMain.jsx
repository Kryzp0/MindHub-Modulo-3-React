import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import HeaderButton from '../components/HeaderButton'
import Login from '../components/Login'
import Register from '../components/Register'
import Nav from '../components/Nav'

const HeaderMain = ({ children, headerOpen, toggleHeader }) => {
    return (
        <>
            <Header headerOpen={headerOpen}>
                <Nav/>
                {/* <Login/> */}
                {/* <Register/> */}
            </Header>
            <HeaderButton toggleHeader={toggleHeader} headerOpen={headerOpen}/>
            <Main headerOpen={headerOpen}>{children}</Main>
        </>
    )
}

export default HeaderMain