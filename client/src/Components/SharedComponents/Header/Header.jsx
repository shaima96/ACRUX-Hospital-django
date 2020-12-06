import React from 'react'
import './header.css'
import { connect } from "react-redux"
import RegisterDialog from "./RegisterDialog"
import { Button,Avatar } from '@material-ui/core'
import { setCurrentUser } from '../../../Redux/User/userActions'

const Header = ({ currentUser, setCurrentUser}) => {
    // console.log(currentUser)
    return (

        <div className='header'>
            <img className='header__logo' src='' alt='logo' />
            <div className='header__contents'>
                {
                    currentUser ?
                    <div className='header__contents'>
                        <Avatar style={{marginRight:'20px'}}  alt={currentUser} />
                        <Button variant="contained" color="primary" onClick={() => {
                            localStorage.removeItem('Authorization')
                            setCurrentUser({
                                currentUser: null,
                                email: null,
                                id: null
                            })
                        }}> LogOut </Button>
                        </div>
                        :
                        <RegisterDialog />
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser } }) => {
    return {
        currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
