import logo from './logo.svg';
import './App.css';
import { jsx, css } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import React from "react"
import { useDispatch, useSelector } from "react-redux";

import SignUp from './newFront/signup/SignUp';
import Login from './newFront/login/SignIn';
// import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Profile from './newFront/Profile/Profile';

import GYM_LOGO from './components/Image/GYM_LOGO.jpeg'
import IntroIMG from './components/Image/gymOverlayBg.jpg'


import Dashboard from './newFront/Dashboard/Dashboard';
import { useEffect, useState, useCallback, component } from 'react';

import { logout } from "./components/actions/auth";
import { clearMessage } from "./components/actions/message";

import { history } from "./helpers/history";

import EventBus from "./components/common/EventBus";

import Home from './newFront/home/Home.js';

function App() {

  //const isUser = localStorage.getItem('user.complete_name')

  const [isUser, setIsUser] = useState('')
  const [isUserRole, setIsUserRole] = useState('')

  useEffect(() => {
    setIsUser(localStorage.getItem("name"))
    setIsUserRole(localStorage.getItem("role"))
  }, [])
  console.log(isUser);

  const dashboardstyle = {
    height: "100vh"
  }


  const gymNameStyle = {
    color: 'rgb(255, 115, 0)'
  }

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    history.push("/signin")
    window.location.reload();
  };



  return (
    <Router history={history}>
      <div>

      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path='/forgotpassword' component={ForgotPassword}></Route>
        <Route exact path='/resetpassword' component={ResetPassword}></Route>
        <Route exact path="/home" component={() => <Home authorized={isUser} />} />
        <div className='dashboard'>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
