import React, { useState, useEffect } from 'react'
import DatePicker from './DatePicker'
import { connect } from 'react-redux'
import { Select, MenuItem, Button } from '@material-ui/core'
import AppointmentList from './AppointmentList'

import './Appointment.css'

const AppointmentPage = ({ match, patientId }) => {
    console.log('id patient', patientId)
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState('')
    const [dates, setDates] = useState([])
    const [avHour,setAvHour] = useState(null)
    const doctorId = match.params.id
    
    const hours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM']

    const handleHours = (e) => setHour(e.target.value)

    const getDates = () => {
        fetch('http://localhost:8000/day/date')
            .then(response => response.json())
            .then(data => setDates(data))
    }

    const getHours = () => {
        if (date) {
            const obj = { pk: getDatePk() }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };

            fetch('http://localhost:8000/day/date/details', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('hour',data)
                    if(data.Hour.length !== 0){
                        setAvHour(data.Hour)
                    }else {
                        setAvHour(null)
                    }
                    
                })
        }

    }

    const getDatePk = () => {
        let pk = null
        dates.forEach((Datadate) => {
            if (Datadate.date === date && Datadate.doctorId == doctorId) {
                console.log('getpk',Datadate)
                pk = Datadate.pk
            }
        })

        return pk
    }

    const bookAppoint = () => {
        const obj = { dayId: getDatePk(), hour, doctorId, patientId }
        console.log(obj)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/day/hour', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    useEffect(() => {
        getDates()
    }, [])



    console.log(dates)
    // console.log(date)
    console.log('doctorId',doctorId)
    return (
        <div className='appointment'>
            <h1>AppointmentPage</h1>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', alignItems: 'center' }}>
                    <DatePicker setDate={setDate} getDates={getDates} doctorId={doctorId} setAvHour={setAvHour} />
                    <Select onClick={() => getHours()} onChange={handleHours} value={hour} style={{ width: '40%', marginTop: '24px' }}>
                        {
                            hours.map((hour, i) => <MenuItem key={i} value={hour} > {hour} </MenuItem>)
                        }
                    </Select>
                    <Button
                        onClick={bookAppoint}
                        variant='contained'
                        style={{ marginLeft: '40px', marginTop: '24px' }}> Book </Button>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                {
                    avHour ? avHour.map((Appointment,i) =>  <AppointmentList hour={Appointment.hour} i={i} /> )
                     : <div></div>
                }
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = ({ user: { patientId } }) => {
    return {
        patientId
    }

}

export default connect(mapStateToProps)(AppointmentPage)