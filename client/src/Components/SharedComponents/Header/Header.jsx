import React from 'react'
import './header.css'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import RegisterDialog from "./RegisterDialog"
import { Button, Avatar, Typography } from '@material-ui/core'
import { setCurrentUser,setUserRole } from '../../../Redux/User/userActions'

const Header = ({ currentUser, setCurrentUser, setUserRole, image }) => {
    // console.log(currentUser)
    return (

        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='https://acruxlatam.com/images/logo-acrux-md.png' alt='logo' />
            </Link>

            <div className='header__contents'>
                {
                    currentUser ?
                        <div className='header__contents'>
                            <Link to='/doctors' style={{textDecoration:"none"}}><h4 className='header__taps'> Doctors </h4></Link>
                            <Link to='/departments' style={{textDecoration:"none"}}><h4 className='header__taps'> Departments </h4></Link>
                            <Link to='/profile'>
                            <Avatar style={{ marginRight: '20px' }} alt={currentUser} src={image} />
                            </Link>
                            
                            <Button variant="contained" color="primary" onClick={() => {
                                localStorage.removeItem('Authorization')
                                setCurrentUser({
                                    currentUser: null,
                                    email: null,
                                    id: null
                                })
                                setUserRole(null)
                            }}> LogOut </Button>

                        </div>
                        :
                        <RegisterDialog />
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser,image } }) => {
    return {
        currentUser,
        image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user)),
        setUserRole: role => dispatch(setUserRole(role))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
