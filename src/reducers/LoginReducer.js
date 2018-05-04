const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, username: action.payload, message: '' };
    case "LOGIN_FAILED":
      return { ...state, message: action.payload, username: '' };
    case "LOGOUT_SUCCESS":
      return { ...state, username: '', message: 'Logged Out' };
    case "LOGOUT_FAILED":
      return { ...state, username: '', message: '' };
    default:
      return state;
  }
};

export default LoginReducer;
