import React from "react";
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';



const CartItem = ( {id,name,price,imageUrl, quantity} ) => {
const { removeProduct } = useCartContext();

    return (

        <>
            <ItemCart>
                <ImgCartItem src={imageUrl} alt={name} />
                <CartInfo>
                    <p>Titulo: {name} </p>
                    <p>Cantidad: {quantity} </p>
                    <p>Precio unitario: ${price} </p>
                    <p>Subtotal: ${quantity * price} </p>
                    <button onClick={() => removeProduct(id)}>Eliminar</button>
                </CartInfo>

            </ItemCart>
        </>


    )
}

export default CartItem


const ItemCart = styled.div`
background-color: #ededed;
border-bottom: 1px solid #ededed;
display: -webkit-flex;
display: flex;
line-height: 18px;
padding: 16px;
text-align: left;
margin: 15px;
width:40vw;
max-width:750px;
background-color: white;
  
  `
  
  const ImgCartItem = styled.img`
  dispaly:flex;
  object-fit: contain;
  width: 80%;
  height:250px;
  `
  
  const CartInfo = styled.div`
  border-bottom: 1px solid #ededed;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  line-height: 18px;
  padding: 16px;
  text-align: left;
  width: 100%;
  `