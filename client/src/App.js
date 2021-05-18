import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './pages/Form/SignUp';
import SignIn from './pages/Form/SignIn';
import Home from './pages/Home/Home';
import ChartIndex from './pages/Chart/index';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/chart" component={ChartIndex} />
      </div>      
    </Router>
  );
}

export default App;
