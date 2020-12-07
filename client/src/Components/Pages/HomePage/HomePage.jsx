import React from 'react'
import RandomCard from './RandomCard'
import './HomePage.css'

const HomePage = ({ departments }) => {
    console.log(departments)
    return (
        <div className='homepage'>
            <div className='homepage__picture'></div>
            <div className='homepage__text'>
                <h1 >Welcome To Our Hospital</h1>
            </div>
            <div className='random'>
            {
                departments ?
                    departments.map((department, i) => <RandomCard key={i} department={department} />) :
                    <div></div>
            }
            </div>



        </div>
    )
}

export default HomePage