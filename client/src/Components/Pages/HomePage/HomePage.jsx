import React from 'react'
import RandomCard from './RandomCard'
import AboutUs from './AboutUs'
import Services from './Services'
import './HomePage.css'

const HomePage = ({ departments }) => {
    const random = (arr) => {
        let array = [...arr]
        let result = []
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * array.length)
            result.push(array[index])
            array.splice(index,1)
        }
        return result
    }

    const res = random(departments)
    return (
        <div className='homepage'>
            <div className='homepage__picture'></div>
            <div className='homepage__text'>
                <h1 >Welcome To Our Hospital</h1>
            </div>
            <AboutUs/>
            <Services/>
            <div className='random'>
                {
                    res[0] ?
                        res.map((department, i) => <RandomCard key={i} department={department} />) :
                        <div></div>
                }
            </div>



        </div>
    )
}

export default HomePage