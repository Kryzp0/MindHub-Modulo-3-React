import { createReducer } from '@reduxjs/toolkit'
import { login, logout } from '../actions/loginActions'

const initialState = {
    loggedIn: false,
    token: '',
    expiredIn: '',
}

const loginReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => {
        return {
            ...state,
            token: action.payload.token,
            expiredIn: action.payload.expiredIn,
            loggedIn: action.payload.loggedIn
        }
    })
    .addCase(logout, (state, action) => initialState)
});

export default loginReducer;
