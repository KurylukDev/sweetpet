import ItemCount from './ItemCount';
import styled from 'styled-components'
import Loading from './Loading'

const ItemDetail = ({ item }) => {

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
                    <ItemCount stock={item.stock} initial={1}/>
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