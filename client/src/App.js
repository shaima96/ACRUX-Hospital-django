import React from 'react'
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    return (
      <div>
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

export default App;
