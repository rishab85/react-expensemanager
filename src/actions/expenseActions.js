import axios from 'axios';

export function listExpense(list){
  console.log(list);
    return{
      type:"LIST_EXPENSE",
      list
    }
}

export function getExp(){
  const user = JSON.parse(localStorage.getItem('user'));
  const config = {headers : {
      'Authorisation' : 'Token '+user.userToken
  }
  }
  return((dispatch)=>
      axios.get('http://localhost:8080/secure/expenses/all/'+user.userId,config)
    .then(function (response) {
      dispatch(listExpense(response.data));
    })
    .catch(function (error) {
    })
  )
}
