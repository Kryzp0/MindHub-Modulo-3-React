import { createReducer } from '@reduxjs/toolkit'
import { login } from '../actions/loginActions'

const initialState = {
    loggedIn: false,
    token:'',
    refreshtoken:'',
    error: '',
    user: {
        name: '',
        email: '',
    }
}

const loginReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => {
        return {
            ...state,
             user:{
                    name: action.payload.name,
                    email: action.payload.email
             }
            }
        
    })
    .addCase(logout, (state, action) => {})
    
})