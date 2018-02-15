import React, {Component} from 'react';
import {getExp} from '../../actions/expenseActions'
import {connect} from 'react-redux';
class ExpenseList extends Component{

  componentDidMount(){
    this.props.getlist();
  }

  render(){
    console.log(this.props.list)
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
              console.log(lis.expenseId)
              return(
                <tr  key={lis.expenseId}>
                  <th scope="row"></th>
                  <td>{lis.expenseName}</td>
                  <td>{lis.expenseAmount}</td>
                  <td>{lis.expenseDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
