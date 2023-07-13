import {createSlice} from '@reduxjs/toolkit'

const contactManagerSlice = createSlice({
    name: 'contactManager',
    initialState: {
        contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
    },
    reducers: {
        addPerson: (state, action) => {
            state.contacts.push(action.payload)

        }
    }
})

export const {addPerson} = contactManagerSlice.actions
export default contactManagerSlice.reducer