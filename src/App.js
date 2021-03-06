import React, { Component } from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SafeArea from './components/safeArea'
import Login from './components/login'
import './App.css';


class App extends Component {
  render() {
    if(!(localStorage.getItem('user')) && !this.props.isLoggedIn){
      return (
          <div className="App">
              <Login />
          </div>
      );
    }else{
      return (
          <div className="App">
            <MuiThemeProvider>
              <SafeArea />
            </MuiThemeProvider>
          </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return{
    isLoggedIn : state.isLoggedIn,
    isLoading : state.isLoading,
    hasError : state.hasError
  }
}

export default connect(mapStateToProps)(App);
