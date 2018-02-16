import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {getExp} from '../../actions/expenseActions'
import AddExpense from './addExpense';
import {connect} from 'react-redux';
class ExpenseList extends Component{

  componentDidMount(){
    this.props.getlist();
  }

  render(){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    return(
      <div className="expenseWrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Expense</th>
              <th scope="col">Amount</th>
              <th scope="col">Expense Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((lis)=>{
              let date = new Date(lis.expenseDate);
              console.log(lis.expenseDate);
              return(
                <tr  key={lis.expenseId}>
                  <th scope="row"></th>
                  <td>{lis.expenseName}</td>
                  <td>{`$ ${lis.expenseAmount}`}</td>
                  <td>{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Route path="expense/list/add" component={AddExpense} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isLoading : state.isLoading,
    hasError : state.hasError,
    list : state.listExpense
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getlist : ()=>dispatch(getExp())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseList);
