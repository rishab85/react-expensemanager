import {combineReducers} from 'redux';
import {hasError, isLoading, isLoggedIn} from './loginReducer';
import {listExpense} from './expense';
export default combineReducers({
  hasError,
  isLoading,
  isLoggedIn,
  listExpense
})
