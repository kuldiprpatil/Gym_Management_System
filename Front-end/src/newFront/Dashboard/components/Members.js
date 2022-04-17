import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllMeembers from "./MembersComponenets/AllMembers";

const Members = () => {

  return (
    <Router>
      <div className='memberContainerBox'>
        <h1>Members</h1>
        <hr></hr>
        <ul className='nav'>
          <li className='nav-item'><a className='nav-link'><Link to='/dashboard/dashboard/allmembers'>All Members</Link></a></li>

        </ul>
        <hr color="black"></hr>
        <div>

          <Switch>
            <Route path='/dashboard/dashboard/allmembers' component={AllMeembers}></Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
};

export default Members;
