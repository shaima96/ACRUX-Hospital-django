import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import PatientsCard from './PatientsCard'


const Details = ({ doctorId }) => {
    console.log(doctorId)
    const [patients, setPatients] = useState([])
    console.log(patients)

    const getAppointments = () => {
        const obj = { doctorId }
        console.log(obj)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/day/date/doctor', requestOptions)
            .then(response => response.json())
            .then(data => setPatients(data.Hour))
    }

    useEffect(() => {
        getAppointments()
    },[])

    return (
        <div >
            {
                patients.length && patients.map( (patient ,i) => <PatientsCard key={i} patient={patient} />  )
            }
        </div>
    )


}

const mapStateToProps = ({ user: { doctorId } }) => {
    return{
        doctorId
    }
}

export default connect(mapStateToProps)(Details)