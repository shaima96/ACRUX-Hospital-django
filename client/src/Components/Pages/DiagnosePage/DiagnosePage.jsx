import React from 'react'
import { TextField, Button } from '@material-ui/core';
import './Diagnose.css'
import DiagnoseResult from './DjagnoseResult'

class DiagnosePage extends React.Component {
    constructor() {
        super()
        this.state = {
            age: null,
            sex: null,
            cp: null,
            trestbps: null,
            chol: null,
            fbs: null,
            restecg: null,
            thalach: null,
            exang: null,
            oldpeak: null,
            slope: null,
            ca: null,
            thal: null,
            probability: null,
            label: null
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(value)
    }
    onSubmit = (e) => {
        e.preventDefault()
        const { age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal } = this.state
        const obj = { age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        fetch('http://localhost:8000/doctor/heart', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === 'OK') {
                    this.setState({
                        probability: result.probability,
                        label: result.label
                    })
                } else {
                    console.log(result)
                }
            })
    }


    render() {
        const { age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, probability, label } = this.state
        return (
            <div style={{ display: 'flex' }}>
                <form onSubmit={this.onSubmit} className='diagnose_form'>
                    <TextField onChange={this.handleChange} name='age' type='text' value={age} label="Age" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='sex' type='text' value={sex} label="sex" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='cp' type='text' value={cp} label="cp" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='trestbps' type='text' value={trestbps} label="trestbps" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='chol' type='text' value={chol} label="chol" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='fbs' type='text' value={fbs} label="fbs" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='restecg' type='text' value={restecg} label="restecg" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='thalach' type='text' value={thalach} label="thalach" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='exang' type='text' value={exang} label="exang" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='oldpeak' type='text' value={oldpeak} label="oldpeak" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='slope' type='text' value={slope} label="slope" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='ca' type='text' value={ca} label="ca" variant="outlined" className='diagnose_input' required />
                    <TextField onChange={this.handleChange} name='thal' type='text' value={thal} label="thal" variant="outlined" className='diagnose_input' required />
                    <Button type='submit' color='primary' variant='contained' className='diagnose_input'> Check patient result </Button>
                </form>
                {
                    probability && <DiagnoseResult label={label} probability={probability} />
                }
            </div>

        )
    }

}


export default DiagnosePage