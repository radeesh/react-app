export const registerAccount = userdata => {
  //userdata = {UserName:"radeesh", Password:"radeesh123", Email: "rad@rad.com"}
  return dispatch => {
    console.log("Dispatching...")
    return fetch("http://jubinjose.ddns.net:6798/webstore/api/account", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userdata)
      })
      .then(response => response.json())
      .then(data => {
        if (data.Success==true) {
          dispatch({ type: "REGISTER_SUCCESS", payload: "Account Created" })
        }
        else
          dispatch({ type: "REGISTER_FAILED", payload: data.Errors[0] })
      })
      .catch((data) => {
        dispatch({ type: "REGISTER_FAILED", payload: "ERROR" })
    });
  };
};
