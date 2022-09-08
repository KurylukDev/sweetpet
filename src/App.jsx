import React from 'react'
import NavBar from './components/NavBar/NavBar'
//import Footer from './components/Footer'
import './App.css';
import ItemListContainer from './containers/ItemListContainer'



const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  );
}

export default App