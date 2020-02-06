import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss'

import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={ Home } />
        </Switch>
      </Router>
    );
  }
}

export default App;