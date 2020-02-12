import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../store/users/action";
class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };
  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        {this.props.user ? (
          <p>You are logged in</p>
        ) : (
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login })(LoginFormContainer);
