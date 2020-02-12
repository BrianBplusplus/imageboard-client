import React, { Component } from "react";
import { connect } from "react-redux";

export class List extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img src={this.props.url} alt={this.props.title} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
