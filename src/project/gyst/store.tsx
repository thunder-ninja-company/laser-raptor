import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import slice from './slice'

const { reducer } = slice

const store = configureStore({
    devTools : true,
    reducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch : () => AppDispatch = useDispatch

export default store
