import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  function Square(props) {
    /* Creates a generic square button with an event listener */
      return (
          <button className={props.square_class} onClick={props.onClick}>
              {props.value}
          </button>
      );
  }


  class Canvas extends React.Component {
    /* Creates a canvas on which the user can draw ascii art, 
    along side a selection of character options */

    constructor(props) {
        super(props)
        this.state = {
          canvas_xlen: this.props.canvas_xlen,
          canvas_ylen: this.props.canvas_ylen,
          // Initialse array with non-breakable spaces
          canvas_squares: Array(
            this.props.canvas_xlen * this.props.canvas_ylen
          ).fill('\xa0'),
          // Set default character
          character: '/',
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

    renderCanvas = () => {
      let canvas = []
      let counter = 0
      for (let i = 0; i < this.state.canvas_ylen; i++) {
        let row = []
        for (let j = 0; j < this.state.canvas_xlen; j++) {
          counter = counter + 1
          row.push(this.renderCanvasSquare(counter))
        }
        canvas.push(<div className="canvas-row">{row}</div>)
      }
      return canvas
    }

    renderOptions = () => {
      let option_squares = []
      let options = ['\xa0', '/', '\\', '|', '+', '-', '_'];
      for (const option of options){
          option_squares.push(this.renderOptionSquare(option));
      }
      return option_squares
    }

    render() {
      return (
        <div>
          <div className="inline-div">
            {this.renderCanvas()}
          </div>
          <div className="inline-div options">
              <Square 
                square_class={"square option-sq choice-sq"}
                value={this.state.character} 
              />
              {this.renderOptions()}
          </div>
        </div>
      );
    }
  }


  class Wrap extends React.Component {
    render() {
      return (
        <div className="canvas">
          <Canvas canvas_xlen="30" canvas_ylen="15" />
        </div>
      );
    }
  }
 
  // ========================================
  
  ReactDOM.render(
    <Wrap />,
    document.getElementById('root')
  );

