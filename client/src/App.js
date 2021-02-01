import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Loans from './Components/Loans';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import Unauthorized from './Components/Unauthorized';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/loans" roles={["user","admin"]} component={Loans}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      <Route exact path='/unauthorized' component={Unauthorized} />
    </Router>
  );
}

export default App;
