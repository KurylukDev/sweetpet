import styled from "styled-components"
import {useState, useEffect} from 'react'

const ItemCount = ({stock, initial}) =>{

    const onAdd = () => {
        alert("You have selected " + number  + " items.");
    }


    const [number, setNumber] = useState(initial);

    useEffect(() =>{
        setNumber(1)
    },[])
    
    const ClickPlus = () => {
        if(number < stock){
            setNumber(number + 1)
        }
        
    }

    const ClickLess = () => {

        if(number > initial){
            setNumber(number - 1)

        }
    }


    return(
    <>
    <ShopButton>
    <CantButton>
    <button className="btnLess" onClick={ClickLess}>-</button>
    <span> {number} </span>
    <button className="btnPlus" onClick={ClickPlus}>+</button>
    </CantButton>
    <AddButton onClick={onAdd}>Agregar</AddButton>
    </ShopButton>
    </>
    )

}

export default ItemCount


const ShopButton = styled.div`
display:flex;
margin: 10px;
button{
  cursor: pointer;
}
`


const CantButton = styled.div`
.btnLess{

    transition: opacity 150ms;
    width: 22px;
    height: 40px;
    border: 2px solid #234196;
    color: #3c3c3c;
    border-radius: 10px;
    outline: none;
    background: transparent;
}

    .btnPlus{
        transition: opacity 150ms;
        width: 22px;
        height: 40px;
        border: 2px solid #234196;
        color: #3c3c3c;
        border-radius: 10px;
        outline: none;
        background: transparent;
        
    }

span{
    border-radius: 0;
    outline: none;
    font-size: 18px;
    font-weight: 700;
}

  `

  const AddButton = styled.button`
  margin: 0px 50px;
  width:50%;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  background-color:#234196;
  border-radius: 25px;
  
  `