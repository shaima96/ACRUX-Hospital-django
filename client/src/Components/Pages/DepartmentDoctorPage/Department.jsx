import React from 'react'



const Department = ({ department }) => {
    return (
            <div className='department'>
                <img className='department_image' src={department.image} alt='department' />
                <h4 className='department_name'> {department.name}</h4>
                <h4 className='book'> Book an appoiment</h4>
            </div>
    )
}
export default Department