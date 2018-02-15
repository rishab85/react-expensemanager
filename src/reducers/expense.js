
export function listExpense(state=[], action){
  switch (action.type) {
    case "LIST_EXPENSE":
    console.log(action.list);
      return action.list;

    default:
      return state;
  }
}
