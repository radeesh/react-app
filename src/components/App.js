import React from "react";
import Login from "./Login";
import { Navbar, Nav, NavItem, Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert, PageHeader } from 'react-bootstrap';

const App = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem >
            Sign Out
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Login />
  </div>
);

export default App;
