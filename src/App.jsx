import React from 'react'
import NavBar from './components/NavBar/NavBar'
//import Footer from './components/Footer'
//import './App.css';import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/IteamDetailContainer';



const App = () => {
  return(
    <>
    <NavBar/>
    <ItemDetailContainer/>
    </>
  );
}

export default App