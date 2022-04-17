import React, {Component, useEffect, useState} from 'react'
import "./style.css"

function Mid(){

    return(

        <div class="div2" id="div2">
        <div class="h1maintitlecolor">
            <h1>FITWAY</h1>
        </div>
        
        <div id="fitway-page-text-after-explore"><h5>FITWAY ia a environment which helps to achieve goals with varieties of</h5>  <h3><b class="h1maintitlecolor"> PROGRAMS</b></h3> </div>

        <div class="container-slider">
            <div
              class="panel active back1"
            >
            <div id="slider-div-content">
              <div class="fitway-page-slider h3inslider"><h3>Basic Fitness</h3></div>
              <div class="fitway-page-slider-text">Challenges are what make life interesting. Overcoming them with a fit mind and body.
              </div>
            </div>
            </div>
           
          
          
            <div
              class="panel back2"
            >
            <div id="slider-div-content">
            <div class="fitway-page-slider h3inslider"><h3>Body Building Course</h3></div>
              <div class="fitway-page-slider-text">Everybody wanna be a bodybuilder, but don’t nobody wanna lift heavy weights!!.Being defeated is often a temporary condition. Giving up is what makes it permanent.
              </div>
            </div>
            </div>
            <div
              class="panel back3"

            >
            <div id="slider-div-content">
            <div class="fitway-page-slider h3inslider"><h3>Yoga Training</h3></div>
              <div class="fitway-page-slider-text">Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body.
              </div>
            </div>
          </div>
            </div>
          </div>


    );
}

export default Mid;