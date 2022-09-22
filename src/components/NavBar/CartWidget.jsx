import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/CartContext';
const CartWidget = () => {
  const {totalProducts} = useCartContext();
    return (
        <>
        <Cart className='links'>
              <div className="cantidad">
                {
                  totalProducts() >= 1
                ?<span className='number'>{totalProducts()}</span>
                :<></>
              }
              </div>
        </Cart>
              
        </>
        )
}

const Cart = styled.div`

.cantidad{
    position: absolute;
    top: 10px;
    right: 45px;
    width: 20px;
    height: 20px;
    
}

.number{
    display:flex;
    align-item: center;
    justify-content: center;
    font-size: 1rem;
    color:white;
    width:100%;
    background-color:red;
    border: 2px red solid;
    border-radius: 50%;
}
`

export default CartWidget

