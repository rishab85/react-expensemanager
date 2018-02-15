import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Homepage from './homepage/home_main';
import Expensepage from './expense/expense_main';
import ExpenseList from './expense/expenselist';
import Navigation from './navigation/nav';
import InfoBar from './navigation/infoBar';

class SafeArea extends Component{
  render(){
    return(
      <Router>
        <div className="wrapper row">
          <div className ="nav-wrapper padding-minus-right col-lg-2">
            <Navigation />
          </div>
          <div className="content-wrapper padding-minus-left paddign-minus-right col-lg-10">
              <InfoBar />
                    <Route exact={true} path="/" component={Homepage}/>
                    <Route path="/expense" component={Expensepage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default SafeArea;
