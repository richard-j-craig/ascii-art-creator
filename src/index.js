import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  function Square(props) {
      return (
          <button className="square" onClick={props.onClick}>
              {props.value}
          </button>
      );
  }


  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialse array with non-breakable spaces
            squares: Array(9).fill('\xa0'),
            character: '-',
        };
    }

    BoardClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.character;
        this.setState({
            squares: squares,
        });
    }

    renderBoardSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]} 
          onClick={() => this.BoardClick(i)}
        />
      )
    }

    OptionClick(option) {
      this.setState({
          character: option,
      });
    }

    renderOptionSquare(option) {
      return (
        <Square 
          value={option} 
          onClick={() => this.OptionClick(option)}
        />
      )
    }

    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

      return (
        <div>
          <div className="status">{status}</div>
          <div className="inline-div">
            <div className="board-row">
              {this.renderBoardSquare(0)}
              {this.renderBoardSquare(1)}
              {this.renderBoardSquare(2)}
            </div>
            <div className="board-row">
              {this.renderBoardSquare(3)}
              {this.renderBoardSquare(4)}
              {this.renderBoardSquare(5)}
            </div>
            <div className="board-row">
              {this.renderBoardSquare(6)}
              {this.renderBoardSquare(7)}
              {this.renderBoardSquare(8)}
            </div>
          </div>
          <div className="inline-div">
            <div className="options">
              <Square 
                className="current-choice" 
                value={this.state.character} 
              />
              {this.renderOptionSquare('\xa0')}
              {this.renderOptionSquare('-')}
              {this.renderOptionSquare('/')}
            </div>
          </div>
        </div>
      );
    }
  }


  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  }
 
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

