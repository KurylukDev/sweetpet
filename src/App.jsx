import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/IteamDetailContainer';
//import Footer from './components/Footer'
//import './App.css';
import Cart from './pages/Cart'
import ItemListContainer from './containers/ItemListContainer'
import Home from './pages/Home'



const App = () => {
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shop/:idCategory' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<p>Error</p>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App