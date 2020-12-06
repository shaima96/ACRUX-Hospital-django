import React from 'react'
import { connect } from "react-redux"
import PatientPage from "./pateintPage"
import DoctorPage from "./doctorPage"
import UserPage from "./UserProfile"

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
                            <PatientPage />
                            : (role === "doctor") ?
                                <DoctorPage />
                                : <UserPage />
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
