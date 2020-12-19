import React from 'react'


const DiangnoseResult = ({label,probability}) => {
    return (
        <div className='diagnose_result'>
            <div className='result_left'>
                <h5> Probability </h5>
                <h5> Result </h5>
            </div>
            <div className='result_right'>
                <h5> % {probability*100} </h5>
                <h5> {label} </h5>
            </div>
        </div>
    )
}

export default DiangnoseResult