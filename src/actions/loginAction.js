import axios from 'axios';

export function hasError(bool){
return{
    type:"HAS_ERROR",
    hasError : bool
  };
}

export function isLoading(bool){
  return{
    type:"IS_LOADING",
    isLoading : bool
  };
}

export function isLoggedIn(bool){
  return{
    type:"IS_LOGGEDIN",
    isLoggedIn : bool
  }
}

export function loginReq(username, password){
  return((dispatch)=>

      axios.post('http://localhost:8080/token', {
      userName: username,
      password: password
    })
    .then(function (response) {
      localStorage.setItem('user',JSON.stringify(response.data));
      dispatch(hasError(false));
      dispatch(isLoggedIn(true));

    })
    .catch(function (error) {
      dispatch(hasError(true));
    })
  )
}
