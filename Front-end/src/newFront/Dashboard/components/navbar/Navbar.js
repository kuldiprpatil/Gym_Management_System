import "./style.css";
import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { Switch,Route } from "react-router-dom";

import { Router } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  const [isUser, setIsUser] = useState("");
  const [isUserRole, setIsUserRole] = useState("");

  useEffect(() => {
    setIsUser(localStorage.getItem("name"));
    setIsUserRole(localStorage.getItem("role"));
  }, []);

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    history.push("/signin");
    window.location.reload();
  };

  const goHome=()=>{
    history.push('/');
    window.location.reload();
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light vavProp">
      <div class="container-fluid">
        <button className="btn btn-info " onClick={goHome}>
          <b class="text-white">FitWay</b>
        </button>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Welcome {isUser}</a>
          </li>
        </ul>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav rightMost ">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={logout}
            >
              Logout
            </button>
          </ul>
          
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
