import React from 'react'
import './App.css';
import Header from './Components/SharedComponents/Header/Header.jsx';
import { connect } from "react-redux"
import { setCurrentUser } from './Redux/User/userActions'
import  Departments from './Components/Pages/DepartmentPage/DepartmentPage'
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      departments:[]
    }
  }

  componentDidMount = () => {
    this.loadUser()
    fetch('http://127.0.0.1:8000/department/')
        .then(response => response.json())
        .then(data =>{
          this.setState({departments : data})
         console.log("dep",this.state.departments)
        })
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
      })

  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route exact path='/' component={HompePage} /> */}
          {/* <Route exact path='/profile' component={ProfilePage} /> */}
          {/* <Route exact path='/bloodbank' component={} />
          
          <Route exact path='/doctors' component={} />
          <Route exact path='/booking' component={} /> */}
          {/* <Route exact path='/departments' component={departments} /> */}
        </Switch>
        <Departments departments = {this.state.departments}/>
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
