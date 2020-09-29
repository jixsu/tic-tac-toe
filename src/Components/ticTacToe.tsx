import * as React from "react";
import { Component } from "react";
import Node from "./node";
import { determineWinner } from "../utils/determineWinner";
import "../css/ticTacToe.css";

export interface TicTacToeProps {}

export interface TicTacToeState {
  turn: string;
  x: Array<string>;
  o: Array<string>;
  score: { x: number; o: number };
  winner: string;
}

class TicTacToe extends React.Component<TicTacToeProps, TicTacToeState> {
  state = {
    turn: "x",
    x: [],
    o: [],
    score: {
      x: 0,
      o: 0,
    },
    winner: "",
  };

  gridArray: Array<Array<string>> = [
    ["0-0", "0-1", "0-2"],
    ["1-0", "1-1", "1-2"],
    ["2-0", "2-1", "2-2"],
  ];

  handleNodeClick = (id: string) => {
    const { turn, x, o, winner, score } = this.state;
    if (winner === "") {
      if (this.isSelected(id) === "") {
        let newTurn: string;
        if (turn === "x") {
          let newTurn: string = "o";
          let newArray: Array<string> = x;
          newArray.push(id);
          this.setState({ x: newArray, turn: newTurn });
          if (determineWinner(newArray, "x") === true) {
            const newScore = score;
            newScore.x += 1;
            this.setState({ winner: "x", score: newScore });
          }
        } else {
          let newTurn: string = "x";
          let newArray: Array<string> = o;
          newArray.push(id);
          this.setState({ o: newArray, turn: newTurn });
          if (determineWinner(newArray, "o") === true) {
            const newScore = score;
            newScore.o += 1;
            this.setState({ winner: "o", score: newScore });
          }
        }
        return true;
      }
    }
    return false;
  };

  handleRestartGame = () => {
    this.setState({ x: [], o: [], turn: "x", winner: "" });
  };

  isSelected = (id: string) => {
    const { x, o } = this.state;
    for (const element of x) {
      if (id === element) {
        return "x";
      }
    }
    for (const element of o) {
      if (id === element) {
        return "o";
      }
    }
    return "";
  };

  renderNodes = () => {
    return this.gridArray.map((row) => {
      return (
        <tr key={row[0][0]}>
          {row.map((node) => (
            <Node
              key={node}
              _id={node}
              selected={this.isSelected(node)}
              onClick={this.handleNodeClick}
            />
          ))}
        </tr>
      );
    });
  };

  render() {
    const { score, turn, winner } = this.state;
    return (
      <div className="y-container">
        <div className="title">Tic Tac Toe</div>
        <div className="score">
          {winner === "" ? "Turn: " + turn : "Please restart game"}
        </div>

        <div className="x-container">
          <div className="player">
            <div className="player-header">x</div>
            <div className="separator"></div>
            <div className="player-score">{score.x}</div>
          </div>
          <table className="grid">
            <tbody>{this.renderNodes()}</tbody>
          </table>
          <div className="player">
            <div className="player-header">o</div>
            <div className="separator"></div>
            <div className="player-score">{score.o}</div>
          </div>
        </div>
        <button
          className="btn btn-primary start"
          onClick={() => this.handleRestartGame()}
        >
          Restart Game
        </button>
        {winner !== "" && <div className="win-text">{winner + " wins!"}</div>}
      </div>
    );
  }
}

export default TicTacToe;
