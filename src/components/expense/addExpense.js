import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
class AddExpense extends Component{

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});
  handleClick = () => console.log('hello');
  render(){
    return(
      <form>
        <TextField hintText="Expense Name" floatingLabelText="Expense Name"/><br/>
        <TextField hintText="Expense Amount" floatingLabelText="Expense Amount"/><br/>

        <SelectField
          floatingLabelText="Category"
          value={this.state.value}
          onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Grocery" />
          <MenuItem value={2} primaryText="Monthly Installments" />
          <MenuItem value={3} primaryText="Electricity Bills" />
          <MenuItem value={4} primaryText="Internet Bills" />
          <MenuItem value={5} primaryText="Insurance" />
          <MenuItem value={6} primaryText="Other Expenses" />
        </SelectField>

        <DatePicker hintText="Select Date" mode="landscape" />

        <RaisedButton label="Add Expense" secondary={true} onClick={this.handleClick}/>
      </form>
    );
  }
}

export default AddExpense;
