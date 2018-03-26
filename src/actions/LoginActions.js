export const loginUser = (username, password) => {
  console.log("Logging in as user: ", username);
  if (username=="radeesh" && password=="password"){
    return { type: "LOGIN_SUCCESS", payload: username }
  }
  else {
    return { type: "LOGIN_FAILED", payload: "Invalid username or password" }
  }
};
