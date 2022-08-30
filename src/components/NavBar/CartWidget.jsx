import React from 'react'
import styled from 'styled-components'

const CartWidget = (props) => {
    return (
        <>
        <Cart className='links'>
              <div className="cantidad">
              <span className='number'>{props.items}</span>
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
    width:100%;
    border: 2px red solid;
    border-radius: 50%;
}
`

export default CartWidget

