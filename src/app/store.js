import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter-with-redux/CounterSlice'
import contactManagerReducer from '../features/contact-manager-with-redux/ContactManagerSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        contactManager: contactManagerReducer,
    }
})