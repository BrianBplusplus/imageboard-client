import React from "react";
import { connect } from "react-redux";
import { createImage } from "../store/images/action";
import CreateForm from "./CreateForm";
class CreateFormContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.createImage(this.state);
    this.setState({
      title: "",
      url: ""
    });
  };
  render() {
    return (
      <div>
        {this.props.user && (
          <CreateForm
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

export default connect(mapStateToProps, { createImage })(CreateFormContainer);
