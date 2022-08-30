import React from 'react'
import styled from 'styled-components'


const BurgerButtom = () => {
    return (
      <Burger>
  <div className="icon nav-icon-7">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </Burger>
  )
}


export default BurgerButtom

const Burger = styled.div`
.nav-icon-7 {
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-7 span {
  background-color: #fff;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 4px;
}
.nav-icon-7 span:nth-child(1) {
  top: 0px;
  left: 0px;
}
.nav-icon-7 span:nth-child(2) {
  top: 13px;
  left: 0px;
}
.nav-icon-7 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
}
.nav-icon-7:not(.open):hover span:nth-child(1) {
  transform: scaleX(0.8);
}
.nav-icon-7:not(.open):hover span:nth-child(2) {
  transform: scaleX(0.5);
}
.nav-icon-7:not(.open):hover span:nth-child(3) {
  transform: scaleX(0.8);
}
.nav-icon-7.open span:nth-child(1) {
  transform: rotate(90deg);
  top: 13px;
}
.nav-icon-7.open span:nth-child(2) {
  transform: scale(0);
  transition-duration: 50ms;
}
.nav-icon-7.open span:nth-child(3) {
  top: 13px;
}

`