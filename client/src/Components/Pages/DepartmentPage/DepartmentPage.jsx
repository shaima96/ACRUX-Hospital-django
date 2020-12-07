import DepCard from './DepartmentCard'
import React from 'react'
import './depCard.css'

const cardsList = ({departments}) => (
  <div class="card_contaner">
    {
      departments.map(department => (
        <DepCard department={department} />
      ))
    }
  </div>
)

export default cardsList


