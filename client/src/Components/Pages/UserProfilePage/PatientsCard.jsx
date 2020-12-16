import React from 'react'
import { Button } from '@material-ui/core'


const PatientsCard = ({ patient }) => {

    const acceptPatient = () => {
        const obj = { patientId:patient.patientId, doctorId:patient.doctorId }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/patient/accept', requestOptions)
            .then(response => response.json())
            .then(data => window.location.reload())
    }

    return (
        <div className='patients'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4> {patient.patientName} </h4>
                <Button size='small' variant='contained' color='primary'
                    onClick={acceptPatient} > Accept </Button>
            </div>
        </div>
    )
}

export default PatientsCard