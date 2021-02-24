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
            //xIsNext: true,
            character: this.props.character,
        };
    }

    handlesClick(i) {
        const squares = this.state.squares.slice();
        //squares[i] = this.state.xIsNext ? 'X' : 'O';
        squares[i] = this.state.character;
        this.setState({
            squares: squares,
            //xIsNext: !this.state.xIsNext,
            character: this.state.character,
        });
    }

    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]} 
          onClick={() => this.handlesClick(i)}
        />
      )
    }

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
    constructor(props) {
      super(props);
      this.state = {
          character: '-',
      };
    }

    handleClick(i) {
      this.setState({
          character: i,
      });
    }

    renderSquare(i) {
      return (
        <Square 
          value={i} 
          onClick={() => this.handleClick(i)}
        />
      )
    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board character={this.state.character} />
          </div>
          <div className="board-row">
            {this.renderSquare('/')}
            {this.renderSquare('-')}
            {this.renderSquare('\xa0')}
            <Square value={this.state.character} />
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

