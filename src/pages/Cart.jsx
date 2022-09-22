import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { useCartContext } from '../context/CartContext'
import styled from 'styled-components'



const Cart = () => {
  const ctx = useContext(CartContext)
  const { clearCart,totalPrice } = useCartContext()

  return(
    <CartContainer>
  <CartPage>
   {
    ctx.cartList.map(item => <CartItem key={item.id} id={item.id} price={item.price} name={item.name} imageUrl={item.image[0]} quantity={item.quantity} /> )
  }
  </CartPage>
  <CartRow>
   <h2>Soy el carrito hermoso</h2>
   <button onClick={clearCart}>Eliminar todo</button>
   <div>
  <p>total: $ {totalPrice()}</p>
  </div>
  </CartRow>
   </CartContainer>
  );
}

export default Cart

const CartPage = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin: 25px;
  
  `

const CartRow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-height:400px;
`

const CartContainer = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
aling-content:center;
background-color: #ededed;

`