import './App.css';
import Image from './Image';
import cat from './cat.webp'

function App() {
  return (
    <Image source={cat} alternativeText='Cute cat staring'/>);
}

export default App;
