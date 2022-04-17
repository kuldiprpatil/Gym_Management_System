import React, { Component, useEffect, useState } from "react";
import VideoBg from "./gymSquats.mp4";
import "./style.css";
import Mid from "./mid.js";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Intro() {
  const [isUser, setIsUser] = useState("");
  const [isUserRole, setIsUserRole] = useState("");

  useEffect(() => {
    setIsUser(localStorage.getItem("name"));
    setIsUserRole(localStorage.getItem("role"));
  }, []);
  const videoStyle = {
    opacity: "1",
  };

  const introStyle = {
    height: "40vh",
  };
  return (
    <div class="style-prefix-2m8vp1 bringCenter">
      <div className="style-prefix-147h429 center">
        <div class="style-prefix-5m47ckv bringCenter">
          <div>
          {/* <NavLink type="button"class="btn btn-success" to="/SignUp"><h3>GET MEMBERSHIP</h3></NavLink> */}
          {isUser ? (
            <button className="btn btn-success">Welcome</button>
          ) : (
            <NavLink className="btn btn-success lefttMost" to="/Signup">
              <h3>GET MEMBERSHIP</h3>
            </NavLink>
          )}
          </div>
          
          {/* <NavLink className="btn btn-success rightPadding" to="/Signup">
                <h3>GET MEMBERSHIP</h3>
              </NavLink> */}
            <div className=" lefttMost">
          <h3 className="fontBold">
            GET <b class="h1maintitlecolor">FIT</b>
          </h3>
          <h3 className="fontBold">
            {" "}
            BUILD <b class="h1maintitlecolor">STRENGTH</b>
          </h3>
          <h3 className="fontBold">IN <b class="h1maintitlecolor fontBold"> FITWAY</b></h3>
          
          <p>
            <h5>
              We strive to keep you fit & healthy through a range of holistic
              offerings that include fitness and yoga, healthy meals, mental
              wellbeing and primary care. Now anyone can now stay healthy from
              the safety of their homes with just a single app that helps you to
            </h5>
          </p>
          </div>
        </div>
        <div class="style-prefix-1yj6cv7">
          <video
            class="style-prefix-g5347j e7v64031"
            width="800"
            height="500"
            style={videoStyle}
            src={VideoBg}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <Mid />
    </div>
  );
}
export default Intro;
