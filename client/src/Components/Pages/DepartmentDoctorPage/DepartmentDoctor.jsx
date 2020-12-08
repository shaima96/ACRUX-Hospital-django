
import React from 'react'
import DepartmentCard from './DepartmentCard'
import './department.css'
class DepartmentDoctor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: []
        }
    }

    componentDidMount() {
        console.log("d",this.props)
        const departmentId = this.props.match.params.id
        this.getDoctors({pk : departmentId})
    }

    getDoctors(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch('http://localhost:8000/department/details', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ result: data.doctors})
            })
    }

    render() {
        const {result} = this.state
        return (
            <div className='home'>
                <div className='departments'>
                {
                    result? result.map( (res , i) => <DepartmentCard department={res} key={i} /> ):<div></div>
                }
                </div>
            </div>
        )
    }


}


export default DepartmentDoctor

