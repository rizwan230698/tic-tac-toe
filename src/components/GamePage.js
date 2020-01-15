import React from "react";
import "./GamePage.css";
class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "player1",
      boxes: {
        box1: "",
        box2: "",
        box3: "",
        box4: "",
        box5: "",
        box6: "",
        box7: "",
        box8: "",
        box9: ""
      },
      winner: false,
      gameover: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    const array = [
      "box1",
      "box2",
      "box3",
      "box4",
      "box5",
      "box6",
      "box7",
      "box8",
      "box9"
    ];
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`${array[i]}`).innerText = "";
    }
    this.setState({
      boxes: {
        box1: "",
        box2: "",
        box3: "",
        box4: "",
        box5: "",
        box6: "",
        box7: "",
        box8: "",
        box9: ""
      },
      winner: false,
      gameover: false
    });
  }

  checkWinner() {
    const {
      box1,
      box2,
      box3,
      box4,
      box5,
      box6,
      box7,
      box8,
      box9
    } = this.state.boxes;
    if (
      (box1 !== "" && box1 === box2 && box2 === box3) ||
      (box4 !== "" && box4 === box5 && box5 === box6) ||
      (box7 !== "" && box7 === box8 && box8 === box9) ||
      (box1 !== "" && box1 === box4 && box4 === box7) ||
      (box2 !== "" && box2 === box5 && box5 === box8) ||
      (box3 !== "" && box3 === box6 && box6 === box9) ||
      (box1 !== "" && box1 === box5 && box5 === box9) ||
      (box3 !== "" && box3 === box5 && box5 === box7)
    ) {
      this.setState({ winner: true });
    } else if (
      box1 !== "" &&
      box2 !== "" &&
      box3 !== "" &&
      box4 !== "" &&
      box5 !== "" &&
      box6 !== "" &&
      box7 !== "" &&
      box8 !== "" &&
      box9 !== ""
    ) {
      this.setState({ gameover: true });
    } else {
      this.setState(state => ({
        active: state.active === "player1" ? "player2" : "player1"
      }));
    }
  }

  handleClick(e) {
    if (e.target.innerText === "") {
      const { active } = this.state;
      const text = active === "player1" ? "X" : "O";
      e.target.innerText = text;
      const clickedBox = e.target.id;
      this.setState(
        state => ({
          boxes: { ...state.boxes, [clickedBox]: text }
        }),
        this.checkWinner
      );
    }
  }

  render() {
    const { player1, player2 } = this.props;
    const { active, winner, gameover } = this.state;
    const name = active === "player1" ? player1 : player2;
    const gameoverDisplay = gameover ? (
      <div className="game-over">
        <span>Game Over</span>
        <button onClick={this.resetGame}>Try Again</button>
        <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>
    ) : null;
    const winnerDisplay = winner ? (
      <div className="winner">
        <span className="winner-name">{name}-wins!</span>
        <button onClick={this.resetGame}>Try Again</button>
        <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>
    ) : null;
    return (
      <div className="game-page">
        <div className="players">
          <div className="player">
            {active === "player1" ? <div className="active"></div> : null}
            <span>{player1} - X</span>
          </div>
          <div className="player">
            {active === "player2" ? <div className="active"></div> : null}
            <span>{player2} - O</span>
          </div>
        </div>
        <div className="play-box">
          <table>
            <tbody>
              <tr>
                <td id="box1" onClick={this.handleClick}></td>
                <td id="box2" onClick={this.handleClick}></td>
                <td id="box3" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <td id="box4" onClick={this.handleClick}></td>
                <td id="box5" onClick={this.handleClick}></td>
                <td id="box6" onClick={this.handleClick}></td>
              </tr>
              <tr>
                <td id="box7" onClick={this.handleClick}></td>
                <td id="box8" onClick={this.handleClick}></td>
                <td id="box9" onClick={this.handleClick}></td>
              </tr>
            </tbody>
          </table>
        </div>
        {winnerDisplay}
        {gameoverDisplay}
      </div>
    );
  }
}
export default Gamepage;
