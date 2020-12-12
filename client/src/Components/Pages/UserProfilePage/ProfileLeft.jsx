import React, { useState } from 'react';
import { connect } from "react-redux"
import { setCurrentUser, setUserImage } from "../../../Redux/User/userActions"

const ProfileLeft = ({ currentUser, email, image }) => {
  const [img, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = () => {
    const data = new FormData()
    data.append('file', this.state.image)
    data.append('upload_preset', 'rnfylwag')
    setLoading(true)
    // const res = await fetch(
    //   'https://api.cloudinary.com/v1_1/dbrtinqbo/image/upload',
    //   {
    //     method: 'POST',
    //     body: data
    //   }
    // )
    // console.log(res)
    // const file = await res.json()
    // setImage(file.secure_url)
    const requestOptions = {
      method: 'POST',
      body: data
    };
    fetch('https://api.cloudinary.com/v1_1/dbrtinqbo/image/upload', requestOptions)
      .then(response => response.json())
      .then(data =>
        console.log(data),
        this.setState({ imageUrl: data.secure_url }),
        // this.updateUserImage({ id: pa, image: data.secure_url }),
        // this.updateDoctorImage({ id: 1, image: data.secure_url })

      );
    setLoading(false)
  };

  updatePatientImage = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('http://127.0.0.1:8000/patient/upload', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  updateDoctorImage = (obj) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch('http://127.0.0.1:8000/doctor/upload', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }


  return (
    <div className='user_details'>

      <div className='user_card'>
        <img className='user_image' src='https://www.shareicon.net/data/256x256/2016/05/26/771204_man_512x512.png' alt='photo' />
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
          {loading ? (
            <h3>Loading...</h3>
          ) : (
              <img src={img} style={{ width: '130px' }} />
            )}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ user: { currentUser, email, image } }) => {
  return {
    currentUser,
    email,
    image
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setUserImage: user => dispatch(setUserImage(user))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileLeft);