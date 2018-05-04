import history from "../components/history"

export const loginUser = (username, password) => {
  console.log("logging in")
  return dispatch => {
    return fetch("http://jubinjose.ddns.net:6798//webstore/api/auth/login", {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"UserName": username, "Password": password})
    })
    .then(response => response.json())
    .then(data => {
      if (data.Success==true) {
        history.push('/homepage')
        dispatch({type: "LOGIN_SUCCESS", payload: data})
      }
      else
        dispatch({ type: "LOGIN_FAILED", payload: data.Errors[0] })
    })
    .catch(() => dispatch({ type: "LOGIN_FAILED", payload: "ERROR" }));
  };
};


export const logoutUser = () => {
  console.log("Logging out");
    history.push('/login')
    return { type: "LOGOUT_SUCCESS", payload: "" }
};
