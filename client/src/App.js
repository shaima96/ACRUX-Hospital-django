import React from 'react'
import './App.css';
import Header from './Components/SharedComponents/Header/Header.jsx';
import { connect } from "react-redux"
import { setCurrentUser } from './Redux/User/userActions'

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
      .then((user) => this.userRole({ pk:user.id }))

  }

  userRole = (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    };

    fetch('http://localhost:8000/user/details', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
  }



  render() {
    return (
      <div>
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={HompePage} /> */}
          {/* <Route exact path='/profile' component={ProfilePage} /> */}
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
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
