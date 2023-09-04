import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter-with-redux/CounterSlice'
import contactManagerReducer from '../features/contact-manager-with-redux/ContactManagerSlice'
import appointmentManagerReducer from "../features/appointments-list-with-redux/AppointmentManagerSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        contactManager: contactManagerReducer,
        appointmentManager: appointmentManagerReducer
    }
})