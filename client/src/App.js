import React from 'react'
import './App.css';
import DoctorPage from './Components/Pages/DoctorProfilePage/DoctorPage'



import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div>
  
          <Switch>
            <Route exact path='/doctors' component={DoctorPage} />
          </Switch>
       
      </div>
    )
  }
}



export default App;