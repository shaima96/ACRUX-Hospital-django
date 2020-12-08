import React from 'react';
import './doctor.css'
import DoctorCard from "./DoctorCard";
import { connect } from "react-redux"
import { setCurrentDoctor } from "../../../Redux/Doctor/doctorActions"

class DoctorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrentDoctor,
            setCurrentDoctor
        }
    }
    componentDidMount() {
        this.getDoctors()
    }
    getDoctors = () => {
        fetch('http://localhost:8000/doctor/')
            .then(response => response.json())
            .then(doctor => {
                console.log("result", doctor)
                // this.setState({ doctors: data })
                this.props.setCurrentDoctor(doctor)
                return doctor
                // console.log(this.props.setCurrentDoctor(doctor))
            })
        }

    render() {
        // const { doctors } =  this.state.CurrentDoctor

        return ( 
            <div className='home'>
                <div className='doctors'>
                    {
                        doctors? doctors.map((doc, i) => <DoctorCard doctor={doc} key={i} />
                        ) : <div></div>
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ doctor: { CurrentDoctor } }) => {
    return {
        CurrentDoctor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentDoctor:doctor=>dispatch(setCurrentDoctor(doctor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorPage)