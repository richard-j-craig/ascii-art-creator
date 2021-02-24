import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  function Square(props) {
      return (
          /* 1.
          Call onClick event handler when button is clicked */
          /* 2.
          The event handler calls props.onClick(). And the 
          properties are received from HandleClick(i) in Board */
          <button className="square" onClick={props.onClick}>
              {props.value}
          </button>
      );
  }
  

  class Board extends React.Component {
    constructor(props) {
        /* Must always call super when defining a constructor of a subclass */
        super(props);
        /* Use state to 'remember' the value of Squares.
        Initialise the value property, and next move boolean */
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    /* 3.
    Sets new properties for Square, following a click */
    handleClick(i) {
        /* Create a new array squares by copying array made in the 
        constructor using slice(). This allows for Immutability
        (a new version of the array is created for each move so we 
        could later add the capability to record a move histories) */
        const squares = this.state.squares.slice();
        // If xIsNext true then X else O
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            // switch to opposite boolean value
            xIsNext: !this.state.xIsNext,
        });
    }

    /* Render a square using the Square function and set its value
    according to the latest state of the array */
    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]} 
          onClick={() => this.handleClick(i)}
        />
      )
    }

    /* Use the above to create nine squares. */
    render() {
      const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
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

