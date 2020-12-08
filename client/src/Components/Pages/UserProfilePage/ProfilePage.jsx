import React from 'react'
import { connect } from "react-redux"
import PatientProfile from "./PateintProfile"
import DoctorProfile from "./DoctorProfile"
import UserProfile from "./UserProfile"

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
                        (role === "patient") ?
                            <PatientProfile />
                            : (role === "doctor") ?
                                <DoctorProfile />
                                : <UserProfile />
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
