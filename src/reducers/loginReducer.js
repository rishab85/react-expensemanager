export function hasError(state=false, action){
  switch (action.type) {
    case "HAS_ERROR":
      return action.hasError

    default:
      return state;
  }
}

export function isLoading(state=false, action){
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading

    default:
      return state;
  }
}

export function isLoggedIn(state=false, action){
  switch (action.type) {
    case "IS_LOGGEDIN":
      return action.isLoggedIn
    default:
      return state;
  }
}
