import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import HeaderButton from '../components/HeaderButton'
import Login from '../components/Login'
import Register from '../components/Register'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'



const HeaderMain = ({ children, headerOpen, toggleHeader, showLogin, toggleLoginOrRegister, setLoginOrRegister }) => {
    const state = useSelector(store => store.loginReducer);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { loggedIn } = state

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);

    return (
        <>
            <Header headerOpen={headerOpen}>
                {(loggedIn || isLoggedIn) ? (
                    <Nav onLoginClick={setLoginOrRegister} />
                ) : (
                    showLogin ? (
                        <Login onRegisterClick={toggleLoginOrRegister} />
                    ) : (
                        <Register onLoginClick={toggleLoginOrRegister} />
                    )
                )}
            </Header>
            <HeaderButton toggleHeader={toggleHeader} headerOpen={headerOpen} />
            <Main headerOpen={headerOpen}>{children}</Main>
        </>
    )
}

export default HeaderMain