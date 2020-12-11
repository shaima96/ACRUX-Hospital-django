import React from 'react'

const AppointmentList = ({hour}) => {
    return (
        <div className='app_list'>
            <h3>Unavailable At {hour}</h3>
        </div>
    )
}


export default AppointmentList