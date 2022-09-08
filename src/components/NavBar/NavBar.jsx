import {Link} from 'react-router-dom'
import React from 'react'
import imagenes from '../../assets/image'
import styled from 'styled-components'
import BurgerButtom from './BurgerButtom'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <>
    <NavContainer>
     <Link to='/'><div className='titleLogo'>
      <img src={imagenes[0]} alt='logo'></img>
      <h1>Sweet Pet</h1>
      </div></Link>
    <div className='links'>
      <a href='/'>Home</a>
      <a href='/'>Shop</a>
      <a href='/'>About</a>
      <a href='/'>Contact</a>
    </div>
    <div>
    <img className='cart links'  src={imagenes[1]} alt='Carrito'/>
    <CartWidget  items='1'/>
    </div>
    <div className='burger'>
    <BurgerButtom />
    </div>
    </NavContainer>
    </>
  );
}
export default NavBar;


const NavContainer = styled.nav`
h1{
  position: absolute;
  top: 26px;
  left: 70px;
  margin:0;
  color: white;
  font-size: 2rem;
  font-weight: 400;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #1fa9e7;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}
img{
  margin:0;
  height: 60px;
}


.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  a{
    color: white;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
    display: block;
  }
}

.links.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
  }
}


.burger{
  @media(min-width: 768px){
    display:none;
  }
}

.titleLogo{
  padding:0;
  margin:0;
}

.cart{

  height: 2.4rem;
  margin-right:50px
}

`