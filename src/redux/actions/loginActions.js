import { createAction } from '@reduxjs/toolkit'

export const login = createAction('LOGIN', (token) => {

    const clearData = {
    token: token,
    expiredIn: new Date (Date.now() + 1000 * 60 * 60).toISOString(),
    loggedIn: true
    }
    return {payload: clearData}
})

export const logout = createAction('LOGOUT')

export const setLoggedIn = createAction('SET_LOGGED_IN');