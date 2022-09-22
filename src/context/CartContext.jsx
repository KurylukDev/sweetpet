import { createContext, useState,useContext } from "react";

export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext();

const CartContextProvider = ({ children }) =>{
    const [cartList, setCartList] = useState([])
    
    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        }else {
            setCartList([...cartList, {...item, quantity}]);
        }
    }

    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cartList.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

const clearCart = () => setCartList([]);

const isInCart = (id) => cartList.find (product => product.id === id) ? true : false;

const removeProduct = (id) => setCartList(cartList.filter(product => product.id !== id));

    return ( 
        <CartContext.Provider value = {{ 
            clearCart,
            isInCart,
            removeProduct,
            addItem,
            totalPrice,
            totalProducts,
            cartList,
            
            }}> 

        {children} 
        
        </CartContext.Provider>
        );
}

export default CartContextProvider;