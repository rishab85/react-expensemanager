import React,{Component} from 'react';
import {connect} from 'react-redux';
import {isLoggedIn} from '../../actions/loginAction'

class InfoBar extends Component{


handleClick = () => {
  let dropdown = document.getElementById('userNav').classList.contains('active');
  if(dropdown){
    document.getElementById('userNav').classList.remove('active')
  }else{
    document.getElementById('userNav').classList.add('active')
  }
}

handleLogout = () => {
  this.props.logout(false);
  localStorage.removeItem('user');
}
  render(){
    const user = JSON.parse(localStorage.getItem('user'));
    return(
      <div>
        <div className="infoBar-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
              </div>
              <div className="col-lg-3">
                <span id="userName" onClick={this.handleClick}>Welcome : {user.userName}</span>
              </div>
              <div className="user-nav" id="userNav">
                <ul>
                  <li onClick={this.handleLogout}>Logout</li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isLoggedIn : state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout : (bool) => (dispatch(isLoggedIn(bool)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
