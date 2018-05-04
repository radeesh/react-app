const AccountReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return { ...state, account: '', message: action.payload };
    case "REGISTER_FAILED":
      return { ...state, account: '', message: action.payload };
    case "GET_ACCOUNT_SUCCESS":
      return { ...state, account: action.payload, message: '' };
    case "GET_ACCOUNT_FAILED":
      return { ...state, account: '', message: '' };
    default:
      return state;
  }
};

export default AccountReducer;
