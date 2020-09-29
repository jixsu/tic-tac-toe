import * as React from "react";
import { Component } from "react";
import TicTacToe from "./ticTacToe";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <TicTacToe />
      </React.Fragment>
    );
  }
}

export default App;
