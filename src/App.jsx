import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/category' element={<p>Hola como estas</p>}/>
      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/item' element={<p>chauchau</p>}/>
      <Route path='*' element={<p>error</p>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App