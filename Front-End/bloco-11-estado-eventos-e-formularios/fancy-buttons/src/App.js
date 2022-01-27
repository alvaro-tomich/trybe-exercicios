import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {

        super ()

        this.middleButton = this.middleButton.bind(this);
        this.state = {
          middleButton: 0,
        }
    }

    middleButton = () => {
      this.setState((estadoAnterior, _props) => ({
        middleButton: estadoAnterior.middleButton + 1,
      }))
    }

    changeColor = (num) => {
      if (num % 2 === 0) {
        return 'green'
      }
      return 'yellow'
    }

  render() {
    return (
      <div>
        <button 
        onClick={this.middleButton} 
        style={{ backgroundColor: this.changeColor(this.state.middleButton)}}>
          {this.state.middleButton}
          </button>
      </div>
    )
  }
}

export default App;
