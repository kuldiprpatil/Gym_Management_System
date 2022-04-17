import "./style.css";
import React from "react";
import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { useHistory } from "react-router";

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

  return (
    <nav class="navbar navbar-expand-lg navbar-light vavProp">
      <div class="container-fluid">
        <NavLink className="btn btn-info " to="/">
          <b class="text-white">FitWay</b>
        </NavLink>  
              <div>
                <NavLink className="btn btn-primary" to="/Signin">
                  Login
                </NavLink>
               
                
              </div>
            

            {/* <Link className='btn btn-success rightPadding' to='/Signup'>SignUp</Link>

<Link className="btn btn-primary" to='/Signin'>Login</Link> */}
          
      </div>
    </nav>
  );
};

export default Navbar;
