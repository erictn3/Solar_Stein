import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './pages/Form/SignUp';
import SignIn from './pages/Form/SignIn';
import Home from './pages/Home/Home';
import ChartIndex from './pages/Chart/index';
import StageForm from './pages/Stages/index';

// import './App.css';

import JobForm from './pages/Jobs/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/chart" component={ChartIndex} />
        <Route exact path="/jobForm" component={JobForm} />
        <Route exact path="/stageForm/:id" component={StageForm} />
      </div>      
    </Router>
  );
}

export default App;
