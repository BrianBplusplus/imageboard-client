import React, { Component } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";
import CreateFormContainer from "./components/CreateFormContainer";
import LoginFormContainer from "./components/LoginFormContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Hello!</h1>
        <LoginFormContainer />
        <CreateFormContainer />
        <ListContainer />
      </Provider>
    );
  }
}
export default App;
