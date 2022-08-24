import imagenes from '../assets/image'
import '../App.css'

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className='logo-header'>
          <img className='logo-header' src={imagenes[0]} alt='logo sweet pet'/>
          <h1>Sweet Pet</h1>
          </div>
          <div className='links-navbar'>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a  href="/">Login</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;