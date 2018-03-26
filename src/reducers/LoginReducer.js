const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, username: action.payload, message: '' };
    case "LOGIN_FAILED":
      return { ...state, message: action.payload, username: '' };
    default:
      return state;
  }
};

export default LoginReducer;

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
