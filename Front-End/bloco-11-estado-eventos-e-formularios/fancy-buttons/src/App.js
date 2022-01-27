import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {

        super ()

        this.leftButton = this.leftButton.bind(this);
        this.middleButton = this.middleButton.bind(this);
        this.rightButton = this.rightButton.bind(this);
        this.state = {
          leftButton: 0,
          middleButton: 0,
          rightButton: 0,
        }
    }

    leftButton = () => {
        this.setState((estadoAnterior, _props) => ({
          leftButton: estadoAnterior.leftButton + 1,
        }))
    }
    
    middleButton = () => {
      this.setState((estadoAnterior, _props) => ({
        middleButton: estadoAnterior.middleButton + 1,
      }))
    }
    
    rightButton = () => {
      this.setState((estadoAnterior, _props) => ({
        rightButton: estadoAnterior.rightButton + 1,
      }))
    }

  render() {
    return (
      <div>
        <button onClick={this.leftButton}>{this.state.leftButton}</button>
        <button onClick={this.middleButton}>{this.state.middleButton}</button>
        <button onClick={this.rightButton}>{this.state.rightButton}</button>
      </div>
    )
  }
}

export default App;
