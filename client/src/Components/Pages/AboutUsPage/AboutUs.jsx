import React from 'react'
import './About.css'

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='about'>
                <div className='about_picture'></div>
                <div className='about_text'>
                    <h1 >About Us</h1>
                </div>
                <div className='about_description'>
                    <div className='description_picture'>
                        <img src="https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/illlustration.png" />
                    </div>
                    <div className='description_text'>
                        <h2 id="title">We Are Specialize in  <br />Medical Diagnositics</h2>
                        <br />
                        <div className='description'>
                            <p> Acrux is a website that enables users to know  <br />the departments and doctors in the hospital,<br />enables the patient to book an appointment<br /> with the doctor and communicate with him.</p>
                        </div>

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='team'>
                    <span>TESTIMONIALS</span>
                    <p>What Our Client’s Say’s</p>
                    <br />
                    <br />
                    <br />
                    <div className='about_user_details'>
                        <img src="https://shtheme.org/demosd/mecare/wp-content/uploads/2020/11/testimonial-img.png" />
                        <div className='about_user_detail'>
                            <h3>Adam Mcwilliams</h3>
                            <h5 >CEO & Founder</h5>
                        </div>
                        <br />
                        <div className="client_text">
                            <p>Welcome to our website through it you can see our departments and doctors ,the patient can book an appointment and chat  with him directly through his account.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


export default AboutUs

