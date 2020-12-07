import React from 'react'
import './App.css';

import Header from './Components/SharedComponents/Header/Header.jsx';
import DoctorPage from './Components/Pages/DoctorProfilePage/DoctorPage'
import { connect } from "react-redux"
import { setCurrentUser, setUserRole } from './Redux/User/userActions'
import UsersProfile from "./Components/Pages/UserProfilePage/ProfilePage"
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  componentDidMount = () => {
    this.loadUser()
  }

  loadUser = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Authorization")
      },
    };
    return fetch('http://localhost:8000/auth/users/me', requestOptions)
      .then(response => response.json())
      .then(user => {
        // console.log("ME", user)
        this.props.setCurrentUser(user)
        return user
      })
      .then((user) => this.userRole({ pk: user.id }))

  }

  userRole = (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };

    fetch('http://localhost:8000/user/details', requestOptions)
      .then(response => response.json())
      .then(user => {
        if (user.patient) {
          this.props.setUserRole(user.patient.role)
        } else if (user.doctor) {
          this.props.setUserRole(user.doctor.role)
        }
      })
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route exact path='/' component={HompePage} /> */}

          <Route exact path='/profile' component={UsersProfile} />
          <Route exact path='/doctors' component={DoctorPage} />
          {/* <Route exact path='/bloodbank' component={} />
          <Route exact path='/departments' component={} />
          <Route exact path='/doctors' component={} />
          <Route exact path='/booking' component={} /> */}
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setUserRole: role => dispatch(setUserRole(role))
  }
}

export default connect(null, mapDispatchToProps)(App);

