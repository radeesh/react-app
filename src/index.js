import React from "react";
import { render } from "react-dom";
import { Navbar, Nav, NavItem, Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert, PageHeader } from 'react-bootstrap';
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
    reducers,
    applyMiddleware(logger)
)
// store.subscribe(() => {
//   console.log(store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
