import images from './assets/image'
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return ( <>
      <NavBar/>
      <img className="gatito" src={images[1]} alt='gatito'/>
      </>
  );
}

export default App;
