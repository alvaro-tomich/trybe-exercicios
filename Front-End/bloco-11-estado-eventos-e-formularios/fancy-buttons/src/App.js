import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {

        super ()

        this.leftButton = this.leftButton.bind(this);
        this.middleButton = this.middleButton.bind(this);
        this.rightButton = this.rightButton.bind(this);

    }

    leftButton = () => {
        console.log(this);
        console.log('Clicou no botão esquerdo')
    }
    
    middleButton = () => {
        console.log(this);
        console.log('Clicou no botão do meio');
    }
    
    rightButton = () => {
        console.log(this);
        console.log('Clicou no botão direito');
    }

  render() {
    return (
      <div>
        <button onClick={this.leftButton}>LeftButton</button>
        <button onClick={this.middleButton}>MiddleButton</button>
        <button onClick={this.rightButton}>RightButton</button>
      </div>
    )
  }
}

export default App;
