import {createSlice} from '@reduxjs/toolkit'

const appointmentManagerSlice = createSlice({
    name: 'appointmentManager',
    initialState: {
        busyTime: [
            {'start' : '10:30',
                'stop' : '10:50'
            },
            {'start' : '18:40',
                'stop' : '18:50'
            },
            {'start' : '14:40',
                'stop' : '15:50'
            },
            {'start' : '16:40',
                'stop' : '17:20'
            },
            {'start' : '20:05',
                'stop' : '20:20'
            }
        ],
        workTime: [
            {'start' : '10:00',
                'stop' : '18:00'
            }
        ]
    },
    reducers: {
        reserveAppointment: {
            reducer(state, action){
                const {index, appointments} = action.payload
                const time = appointments[index].time.split(' ')
                state.busyTime.push({'start' : time[0],
                    'stop' : time[1]
                })
            },
            prepare(index, appointments){
                return{
                    payload: {index, appointments}
                }
            }
        }
    }
})

export const {reserveAppointment} = appointmentManagerSlice.actions
export default appointmentManagerSlice.reducer