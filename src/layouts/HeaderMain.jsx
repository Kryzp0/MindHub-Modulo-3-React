import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import HeaderButton from '../components/HeaderButton'
import Login from '../components/Login'
import Register from '../components/Register'
import Nav from '../components/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { setLoggedIn } from '../redux/actions/loginActions';



const HeaderMain = ({ children, headerOpen, toggleHeader, showLogin, toggleLoginOrRegister, setLoginOrRegister }) => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.loginReducer);
    const { loggedIn } = state;

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        dispatch(setLoggedIn(loggedInStatus));
    }, [dispatch]);

    return (
        <>
            <Header headerOpen={headerOpen}>
                {loggedIn ? (
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