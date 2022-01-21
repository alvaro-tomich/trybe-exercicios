import './App.css';
import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

/* const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrTasks = ['Estudar o conteúdo', 'Descansar', 'Fazer exercícios'] */

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    ) 
  }
};

export default App;
