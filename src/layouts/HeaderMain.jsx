import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import { useState } from 'react'
import HeaderButton from '../components/HeaderButton'

const HeaderMain = ({ children }) => {

    const [headerOpen, setHeaderOpen] = useState(false);

    const toggleHeader = () => {
        setHeaderOpen(!headerOpen);
    };

    return (
        <>
            <Header headerOpen={headerOpen}/>
            <HeaderButton toggleHeader={toggleHeader} headerOpen={headerOpen}/>
            <Main headerOpen={headerOpen}>{children}</Main>
        </>
    )
}

export default HeaderMain