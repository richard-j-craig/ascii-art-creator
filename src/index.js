import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  function Square(props) {
      return (
          <button className={props.square_class} onClick={props.onClick}>
              {props.value}
          </button>
      );
  }


  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialse array with non-breakable spaces
            canvas_squares: Array(24).fill('\xa0'),
            // Set default character
            character: '-',
        };
    }

    CanvasClick(i) {
        const canvas_squares = this.state.canvas_squares.slice();
        canvas_squares[i] = this.state.character;
        this.setState({
          canvas_squares: canvas_squares,
        });
    }

    renderCanvasSquare(i) {
      return (
        <Square 
          square_class={"square canvas-sq"}
          value={this.state.canvas_squares[i]} 
          onClick={() => this.CanvasClick(i)}
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
          square_class={"square option-sq"}
          value={option} 
          onClick={() => this.OptionClick(option)}
        />
      )
    }

    render() {
      return (
        <div>
          <div className="inline-div">
            <div className="canvas-row">
              {this.renderCanvasSquare(0)}
              {this.renderCanvasSquare(1)}
              {this.renderCanvasSquare(2)}
              {this.renderCanvasSquare(3)}
              {this.renderCanvasSquare(4)}
              {this.renderCanvasSquare(5)}
            </div>
            <div className="canvas-row">
              {this.renderCanvasSquare(6)}
              {this.renderCanvasSquare(7)}
              {this.renderCanvasSquare(8)}
              {this.renderCanvasSquare(9)}
              {this.renderCanvasSquare(10)}
              {this.renderCanvasSquare(11)}
            </div>
            <div className="canvas-row">
              {this.renderCanvasSquare(12)}
              {this.renderCanvasSquare(13)}
              {this.renderCanvasSquare(14)}
              {this.renderCanvasSquare(15)}
              {this.renderCanvasSquare(16)}
              {this.renderCanvasSquare(17)}
            </div>
            <div className="canvas-row">
              {this.renderCanvasSquare(18)}
              {this.renderCanvasSquare(19)}
              {this.renderCanvasSquare(20)}
              {this.renderCanvasSquare(21)}
              {this.renderCanvasSquare(22)}
              {this.renderCanvasSquare(23)}
            </div>
          </div>
          <div className="inline-div">
            <div className="options">
              <Square 
                square_class={"square option-sq choice-sq"}
                value={this.state.character} 
              />
              {this.renderOptionSquare('\xa0')}
              {this.renderOptionSquare('-')}
              {this.renderOptionSquare('/')}
              {this.renderOptionSquare('\\')}
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

