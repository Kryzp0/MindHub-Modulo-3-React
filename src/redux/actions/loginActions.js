import { createAction } from '@reduxjs/toolkit'

export const login = createAction('LOGIN', (user) => ({ payload: user }))