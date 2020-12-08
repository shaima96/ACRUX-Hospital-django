import React from 'react'


const Doctor = ({ doctor }) => {
    return (
            <div className='doctor'>
                <img className='doctor_image' src={doctor.image} alt='doctor' />
                <h4 className='doctor_name'> {doctor.name}</h4>
                <h4 className='book'> Book an appoiment</h4>
            </div>
    )
}
export default Doctor