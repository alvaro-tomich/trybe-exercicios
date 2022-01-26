import React from 'react';
import './App.css';

const leftButton = () => {
    console.log('Clicou no botão esquerdo')
}

const middleButton = () => {
    console.log('Clicou no botão do meio')
}

const rightButton = () => {
    console.log('Clicou no botão direito')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={leftButton}>LeftButton</button>
        <button onClick={middleButton}>MiddleButton</button>
        <button onClick={rightButton}>RightButton</button>
      </div>
    )
  }
}

export default App;
