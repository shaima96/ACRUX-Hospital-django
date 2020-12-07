import DepCard from './DepartmentCard'
import React from 'react'
import './depCard.css'

 const cardsList = props => (
   <div class ="card_contaner">
   {
   props.departments.map(department =>(
  <DepCard department={department}/>
   ))
   }
   </div>
 )
   
 export  default cardsList
    
  
