import React, { useState } from 'react';
import { connect } from "react-redux"
import { setCurrentUser, setUserImage } from "../../../Redux/User/userActions"

const ProfileLeft = ({ currentUser, email, image, role, patientId, doctorId, setUserImage }) => {
  
  const [loading, setLoading] = useState(false)
  // console.log('profileImage', profileImage)

  const uploadImage = (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    formData.append('upload_preset', 'pqcz20rh')

    const requestOptions = {
      method: 'POST',
      body: formData
    };
    fetch('	https://api.cloudinary.com/v1_1/dzjchtsxn/image/upload', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data,setUserImage)
        setUserImage(data.secure_url)
        if (role === 'patient') updateImage({ pk:patientId,image:data.secure_url })
        if (role === 'doctor') updateImage({ pk:doctorId,image:data.secure_url })
       
      });

  }

  const updateImage = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    if (role === 'patient') {
      fetch('http://127.0.0.1:8000/patient/upload', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
    if (role === 'doctor') {
      fetch('http://127.0.0.1:8000/doctor/update', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

  }



  return (
    <div className='user_details'>

      <div className='user_card'>
        <img className='user_image' src={image} alt='photo' />
        <div className='user_info'>
          <h4>{currentUser}</h4>
          <h4>{email}</h4>
        </div>
        <div className="user_upload">
          <h3>Upload Your Image</h3>
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
          />
        </div>
      </div>
    </div>
  )

}
const mapStateToProps = ({ user: { currentUser, email, image, patientId, doctorId, role } }) => {
  return {
    currentUser,
    email,
    image,
    patientId,
    doctorId,
    role

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setUserImage: image => dispatch(setUserImage(image)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileLeft);