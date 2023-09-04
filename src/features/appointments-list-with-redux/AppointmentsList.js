import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './AppointmentsList.css'
import {addAppointment, reserveAppointment, resetAppointment} from "./AppointmentManagerSlice";

function AppointmentsList(props) {
    const workTime = useSelector(state => state.appointmentManager.workTime[0])
    const busyList = useSelector(state => state.appointmentManager.busyTime)
    const dispatch = useDispatch()

    const createAppointments = () => {
        let blockTimeList = []

        busyList.forEach((block) => {
            let beginHour = Number(block.start.split(':')[0])
            let beginMinute = Number(block.start.split(':')[1])
            let endHour = Number(block.stop.split(':')[0])
            let endMinute = Number(block.stop.split(':')[1])
            beginMinute < 30 ? beginMinute = 0 : beginMinute = 30
            if (endMinute <= 30 && endMinute !== 0) {
                endMinute = 30;
            } else if (endMinute > 30) {
                endMinute !== 0 && endHour++
                endMinute = 0;
            }

            let beginTime = beginHour * 60 + beginMinute
            let endTime = endHour * 60 + endMinute
            while (beginTime < endTime) {
                let time = `${Math.floor(beginTime / 60)}:${(beginTime % 60 === 0 ? '00' : '30')} `
                if (beginTime % 60 === 0) {
                    time += `${Math.floor(beginTime / 60)}:30`
                } else {
                    time += `${Math.floor((beginTime + 60) / 60)}:00`
                }
                blockTimeList.push(time)
                beginTime += 30
            }
        })
        console.log(blockTimeList)

        let appointments = []
        const start = Number(workTime.start.split(':')[0]) || 0
        const stop = Number(workTime.stop.split(':')[0]) || 24

        for (let hour = start; hour < stop; hour++) {
            if (hour * 60 + 30 <= stop * 60 && !blockTimeList.includes(`${hour}:00 ${hour}:30`)) {
                appointments.push(
                    {
                        time: `${hour}:00 ${hour}:30`,
                        free: true
                    }
                )
            } else if (blockTimeList.includes(`${hour}:00 ${hour}:30`)) {
                appointments.push(
                    {
                        time: `${hour}:00 ${hour}:30`,
                        free: false
                    }
                )
            }
            if (hour * 60 + 60 <= stop * 60 && !blockTimeList.includes(`${hour}:30 ${hour + 1}:00`)) {
                appointments.push(
                    {
                        time: `${hour}:30 ${hour + 1}:00`,
                        free: true
                    }
                )
            } else if (blockTimeList.includes(`${hour}:30 ${hour + 1}:00`)) {
                appointments.push(
                    {
                        time: `${hour}:30 ${hour + 1}:00`,
                        free: false
                    }
                )
            }
        }
        return appointments
    }

    const appointments = createAppointments()

    const appointmentsList = appointments.map((val, index) =>
        <tr key={index}>
            <td className='Appointments-list-td'>{val.time}</td>
            <td className='Appointments-list-td'>
                {val.free ? <button
                    // className={styles.button}
                    onClick={() => dispatch(reserveAppointment(index, appointments))}>забронировать</button>
                : 'Занято'}
            </td>
        </tr>
    )

    return <table className='Appointments-list-table'>
        <tbody>
            {appointmentsList}
        </tbody>
    </table>
}

export default AppointmentsList