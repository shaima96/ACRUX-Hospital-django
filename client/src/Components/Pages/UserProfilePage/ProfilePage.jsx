import React from 'react'
import { connect } from "react-redux"
import PatientProfile from "./PateintProfile"
import DoctorProfile from "./DoctorProfile"
import UserProfile from "./UserProfile"
import ProfileLeft from "./ProfileLeft.jsx"
import RightImage from "./RightImage.jsx"
import Details from "./Details.jsx"
import UserForm from './UserForm'

import "./UserProfile.css"
class UsersProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { role, currentUser } = this.props
        return (

            <div>
                {
                    currentUser ?
                        <div className="profile">
                            <div className="profile__left">
                                {
                                    (role === "user") ? <UserForm /> : <ProfileLeft />
                                }
                            </div>
                            <div className="profile__right">

                                <RightImage />

                                <div className="right__content">
                                    {
                                        (role === "patient") ?
                                            <DoctorProfile />
                                            : (role === "doctor") ?
                                                <DoctorProfile />
                                                : <UserProfile />
                                    }
                                    <div className="content__right">
                                        <Details />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div>LOGIN FIRST</div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ user: { role, currentUser } }) => {
    return {
        role,
        currentUser
    }
}

export default connect(mapStateToProps)(UsersProfile);
