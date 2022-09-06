import React from 'react'
//import images from './assets/image'
import NavBar from './components/NavBar/NavBar'
//import Footer from './components/Footer'
import './App.css';
//import Items from './containers/ItemContainers'
import ItemListContainer from './components/ItemListContainer'
//import ItemDetailContainer from './containers/IteamDetailContainer'



const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  );
}

export default App