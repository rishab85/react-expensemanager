import React,{Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <div className="main-nav">
        <ul>
          <NavLink exact to="/" activeClassName="activeList"><li>Home</li></NavLink>
          <NavLink to="/expense" activeClassName="activeList"><li>Expenses</li></NavLink>
          <li>Groups</li>
          <li>Contact</li>
        </ul>

        <div className="coin">
        </div>
      </div>
    );
  }
}

export default Nav
