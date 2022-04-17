import React, {Component, useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link ,withRouter, Redirect} from "react-router-dom";

import ChooseProgram from './AboutGym/ChooseProgram';
import Trainer from './AboutGym/Trainer';
import Intro from './AboutGym/Intor';
import Footer from './AboutGym/Footer';
import UserFeedback from '../Feedback/Feedback';
import VideoBg from "../bgVideo.mp4";

import './StyleAboutGym.css'

const videoStyle = {
  opacity : '0.6'
}

const introStyle = {
  height : '40vh'
}

function Home({authorized}) {
  const [isUser,setIsUser] = useState('')
  const [isUserRole,setIsUserRole] = useState('')

  useEffect(() => {
    setIsUser(localStorage.getItem("name")) 
    setIsUserRole(localStorage.getItem("role")) 
}, [])
  return (
    <div className='HomeContainer'>
    <div className="card bg-dark text-white">
        <video style={videoStyle} src={VideoBg} autoPlay loop></video>
        <div className="card-img-overlay">
          <div className='text-center'>
            <h5>WORK <b className='h1maintitlecolor'>HARDER</b> GET <b className='h1maintitlecolor'>STRONGER</b></h5>
            <h1 className='h1maintitle'>EASY WITH OUR <b className='h1maintitlecolor'>GYM</b></h1>
            {
              isUser ? <button className='btn btn-success'>Expore More</button>
              : <Link className="btn btn-success my-2 my-sm-0" to='/signup'>Become A Member</Link>
            }
            
          </div>
        </div>
    </div>
    <div id='chooseprogram'>
      <ChooseProgram></ChooseProgram>
    </div>
    <div id='trainer'>
      <Trainer></Trainer>
    </div>

    <div style={introStyle} id='intro'>
      <Intro></Intro>
    </div>
    
    {/* <UserFeedback></UserFeedback> */}

    <div className='footer' id='contact'>
      <Footer></Footer>
    </div>
    </div>
    
  );
}

export default Home;