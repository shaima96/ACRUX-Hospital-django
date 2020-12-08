import DepCard from './DepartmentCard'
import React from 'react'
import './depCard.css'

const cardsList = ({departments}) => (
  <div class="random">
    {
      departments.map((department, i) => (
        <DepCard key={i} department={department} />
      ))
    }
  </div>
)

export default cardsList


