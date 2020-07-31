import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//components
import Home from './Screens/home/home';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <Router>
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;
