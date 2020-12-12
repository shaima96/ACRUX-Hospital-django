import React, { useState, useEffect } from 'react'
import DatePicker from './DatePicker'
import { connect } from 'react-redux'
import { Select, MenuItem, Button } from '@material-ui/core'

const AppointmentPage = ({ match,patientId }) => {
    console.log('id patient',patientId)
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [dates, setDates] = useState([])
    const [pk, setPk] = useState(null)
    const doctorId = match.params.id
    const hours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM']
    console.log(pk)
    const handleHours = (e) => setHour(e.target.value)

    const getDates = () => {
        fetch('http://localhost:8000/day/date')
            .then(response => response.json())
            .then(data => setDates(data))
    }

    const getDatePk = (date) => {
        dates.forEach((Datadate) => {
            if (Datadate.date === date) {
                setPk(Datadate.pk)
            }
        })
    }

    const bookAppoint = () => {
        const obj ={dayId:pk,hour,doctorId,patientId}
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




    console.log(date)
    console.log(hour)
    return (
        <div className='appointment'>
            <h1>AppointmentPage</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', alignItems: 'center' }}>
                <DatePicker setDate={setDate} getDatePk={getDatePk} />
                <Select onChange={handleHours} value={hour} style={{ width: '40%', marginTop: '24px' }}>
                    {
                        hours.map((hour, i) => <MenuItem key={i} value={hour} > {hour} </MenuItem>)
                    }
                </Select>
                <Button
                    onClick={bookAppoint}
                    variant='contained'
                    style={{ marginLeft: '40px', marginTop: '24px' }}> Book </Button>
            </div>
        </div>
    )
}

const mapStateToProps = ({user:{ patientId }}) => {
    return{
        patientId
    }
    
}

export default connect(mapStateToProps)(AppointmentPage)