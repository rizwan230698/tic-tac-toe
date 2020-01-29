import React from "react";
import GamePage from "./components/GamePage";
import LandingPage from "./components/LandingPage.js";

import "./App.css";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landingPage",
      player1: "",
      player2: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { player1, player2 } = this.state;
    if (player1 !== "" && player2 !== "") {
      this.setState({
        display: "gamePage"
      });
    }
  }

  render() {
    const { display, player1, player2 } = this.state;
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        {display === "landingPage" ? (
          <LandingPage
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <GamePage
            player1={player1.toUpperCase()}
            player2={player2.toUpperCase()}
          />
        )}
      </div>
    );
  }
}

export default TicTacToe;
