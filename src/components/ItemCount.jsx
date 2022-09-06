import styled from "styled-components"
import {useState, useEffect} from 'react'



const ItemCount = ({onAdd}) =>{


    const [number, setNumber] = useState(1);

    useEffect(() =>{
        setNumber(1)
    },[])
    
    const ClickPlus = () => {
        if(number < 5){
            console.log('+1')
            setNumber(number + 1)
        }
        
    }

    const ClickLess = () => {

        if(number > 1){
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