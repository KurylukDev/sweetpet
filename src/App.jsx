import React from 'react'
import images from './assets/image'
import Header from './components/NavBar'
import Footer from './components/Footer'
import './App.css';



const App = () => {
  return(
    <>
    <Header />
    <img className='gatito' src={images[1]} alt='logo' />
    <Footer />
    </>
  );
}

export default App