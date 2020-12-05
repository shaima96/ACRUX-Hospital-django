import React from 'react'
import './header.css'
import {connect} from "react-redux"
import RegisterDialog from "./RegisterDialog"
const Header = ({currentUser}) => {
    return (

        <div className='header'>
            <img className='header__logo' src='' alt='logo' />
            <div className='header__contents'>
            {
                currentUser?
                <h1 className='contents__content'>  LOGOUT</h1>
                :
                <h1 className='contents__content'> <RegisterDialog/>  </h1>
            }
            </div>
        </div>
    )
}

const mapStateToProps=({user:{currentUser}})=>{
return{
    currentUser
}
}

export default connect()(Header);
