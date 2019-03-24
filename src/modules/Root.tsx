import React, { Component } from "react";
import { connect } from "react-redux";
import LobbyPage from "./LobbyPage";

export class Root extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <LobbyPage />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Root);
