import React, { Component} from 'react';
import {BrowserRouter as Route, Router, Link, Switch} from 'react-router-dom';
import ExpenseList from './expenselist';
import AddExpense from './addExpense';
class ExpenseMain extends Component{
  render(){
    return(
      <div className="viewWrapper container">
          <div className="test">
            <h3>Expense List</h3>
          </div>

            <Route path={`/expense/list`} component={ExpenseList}/>
      </div>
    );
  }
}

export default ExpenseMain;
