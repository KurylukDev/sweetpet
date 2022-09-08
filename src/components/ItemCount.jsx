import styled from "styled-components"
import {useState, useEffect} from 'react'



const ItemCount = ({onAdd, stock, initial}) =>{


    const [number, setNumber] = useState(initial);

    useEffect(() =>{
        setNumber(1)
    },[])
    
    const ClickPlus = () => {
        if(number < stock){
            console.log('+1')
            setNumber(number + 1)
        }
        
    }

    const ClickLess = () => {

        if(number > initial){
            console.log('-1')
            setNumber(number - 1)

        }
    }


    return(
    <>
    <ShopButton>
    <button onClick={ClickLess}>-</button>
    <span> {number} </span>
    <button onClick={ClickPlus}>+</button>
    <button onClick={onAdd}>Agregar</button>
    </ShopButton>
    </>
    )

}

export default ItemCount


const ShopButton = styled.div`
  
  `