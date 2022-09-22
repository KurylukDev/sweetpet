import ItemCount from './ItemCount';
import styled from 'styled-components'
import Loading from './Loading'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from '../context/CartContext'


const ItemDetail = ({ item }) => {
    const[itemCount, setItemCount] = useState(0)
    const ctx = useContext(CartContext)
    
    const onAdd = (quantity) => {
        alert("You have selected " + quantity + " items.");
        setItemCount(quantity)
        ctx.addItem(item,quantity)
    }

    if ( item && item.image ){
    return (
        <>

            <DetailContainer>
                <ContainerDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <Price>$ {item.price}</Price>
                        <p>{item.stock} unidades en stock</p>
                        {
                            itemCount === 0
                           ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                           : <Link to='/cart'><CheckoutButton>checkout</CheckoutButton></Link>
                        }
                    </InfoContainer>
                </ContainerDetail>
            </DetailContainer>
        
        
        </>
    );

    }else{

        return(
            <Loading/>

            )

    }

}

export default ItemDetail;

const CheckoutButton = styled.button`
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

  const DetailContainer = styled.div`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  `;
  
  const ContainerDetail = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-item:center;
  `;
  
  const ImgContainer = styled.div`
`;

const ImageDetail = styled.img`
    width: 100%;
    height: 100%;
    max-height:600px;
    object-fit:contain;
`;

const InfoContainer = styled.div`
max-width:500px;
width:60%;
    padding: 0px 50px;
`;

const Price = styled.p`
color: #234196;
font-size: 28px;
line-height: 1;
font-weight: 900;
`