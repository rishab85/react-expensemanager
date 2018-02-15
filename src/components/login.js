import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginReq} from '../actions/loginAction'
import Homepage from './homepage/home_main'

class Login extends Component{

  constructor(props){
    super(props)

    this.state={
      username :"",
      password :""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let name=event.target.name;
    let value=event.target.value;

    this.setState({
      [name] : value
    });
  }

  handleClick=(event)=>{
    event.preventDefault();
    if(this.state.username!=="" && this.state.password!==""){
      this.props.loginReq(this.state.username, this.state.password);
    }

    if(!localStorage.getItem('user')){
      console.log('present');
    }
  }

  render(){
    return(
      <div className="container">
        <form className="loginform">
          <div className={"alert alert-danger "+(this.props.hasError?'test':'hidden')} role="alert">
            Sorry! Wrong Username or Password
          </div>
          <div className={"alert alert-success "+(this.props.isLoggedIn?'test':'hidden')} role="alert">
            Login Succecssful.
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={this.handleChange} name="username" type="text" className="form-control" value={this.state.username} id="exampleInputEmail1" placeholder="Enter email" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={this.handleChange} name="password" type="password" className="form-control" value={this.state.password} id="exampleInputPassword1" placeholder="Password" required/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    hasError : state.hasError,
    isLoading : state.isLoading,
    isLoggedIn : state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginReq : (username, password) => dispatch(loginReq(username, password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
