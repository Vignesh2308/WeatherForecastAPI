import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar'
// import Tracking from './components/Tracker'
// import Login from './components/Login'
// import DefectTracker from './components/defect'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './weather/HomeComponent'


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route exact path='/' component={Login}/>
        <Route path='/defect' component={DefectTracker}/>
      </Router> */}
      {/* <Login />
      <DefectTracker /> */}
      <Home />
    </div>
  );
}

export default App;
