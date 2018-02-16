import React, { Component} from 'react';
import {BrowserRouter as Route, Router, Link} from 'react-router-dom';
import ExpenseList from './expenselist';
import AddExpense from './addExpense';
import RaisedButton from 'material-ui/RaisedButton';

class ExpenseMain extends Component{
  render(){
    return(
      <div className="viewWrapper">
          <div className="test">
              <h3 className="subHeading">Expense Manager</h3>
              <Link to="/expense/add" >
                <RaisedButton className="primary-btn float-right" label="Add Expense" primary={true}/>
              </Link>
            <hr />
          </div>

            <Route path={`/expense/list`} component={ExpenseList}/>
      </div>
    );
  }
}

export default ExpenseMain;
