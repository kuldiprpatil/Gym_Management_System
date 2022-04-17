import React, {Component, useEffect, useState} from 'react'
import Navbar from './compoents/Navbar.js';
import Intro from './compoents/Intro.js';
import Feedback from "./compoents/feedback.js";
import Footer from './compoents/Footer.js';
function Home(){

    return(
       <>
       
       <Navbar />
       <Intro /><Feedback /><Footer/>
      
       {/* <Intro /> 
       <Feedback/> */}
       </>
    );
}
export default Home;