const LogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT_SUCCESS":
      return { ...state, username: '', message: 'Logged Out' };
    case "LOGOUT_FAILED":
      return { ...state, username: '', message: '' };
    default:
      return state;
  }
};

export default LogoutReducer;

//or alternate way
// export function CounterReducer(state = 0, action){
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }
