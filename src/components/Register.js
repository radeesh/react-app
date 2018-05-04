import React  from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import { registerAccount } from "../actions/index";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmpassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //this.props.registerAccount(this.props.account)
    this.props.registerAccount({"Username":this.state.username, "Password":this.state.password, "Email":this.state.email})
  }

  render() {
    console.log(this.props.account)
    var errorMessage = null;
    if (this.props.account.message !== undefined && this.props.account.message !== ''){
      errorMessage = <Alert bsStyle="warning">
        { this.props.account.message }
      </Alert>
    }
    return (
    <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4} mdPush={4} xsPush={3}>
          {errorMessage}
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username">
              <ControlLabel>*Username</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="firstname">
              <ControlLabel>First Name (WIP)</ControlLabel>
              <FormControl
                autoFocus
                type="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="lastname">
              <ControlLabel>Last Name (WIP)</ControlLabel>
              <FormControl
                value={this.state.lastname}
                onChange={this.handleChange}
                type="lastname"
              />
            </FormGroup>
            <FormGroup controlId="email">
                <ControlLabel>*Email</ControlLabel>
                <FormControl
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>*Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="confirmpassword">
              <ControlLabel>*Confirm Password</ControlLabel>
              <FormControl
                value={this.state.confirmpassword}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button bsStyle="primary" bsSize="small"
              type="submit"
              onClick={this.handleSubmit}
            >
              Register
            </Button>{" "}
            <Link to="/login">Cancel</Link>
          </form>
        </Col>
      </Row>
    </Grid>)
  }
}
const mapStateToProps = state => {
  return {
    account: state.account
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ registerAccount: registerAccount }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);