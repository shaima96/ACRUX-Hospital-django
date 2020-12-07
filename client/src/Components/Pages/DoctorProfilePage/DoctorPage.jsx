import React from 'react';
import './doctor.css'
import MediaCard from "./DoctorCard";




class DoctorPage extends React.Component {
    constructor() {
        super()
        this.state = {
            doctors: []
        }
    }
    componentDidMount() {
        this.getDoctors()
    }
    getDoctors = () => {
        fetch('http://localhost:8000/doctor/')
            .then(response => response.json())
            .then(data => {
                console.log("result", data)
                this.setState({ doctors: data })
            })
        }

    render() {
        const { doctors } = this.state
        return ( 
            <div className='home'>
                <div className='doctors'>
                    {
                        doctors? doctors.map((doc, i) => <MediaCard doctor={doc} key={i} />
                        ) : <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default DoctorPage