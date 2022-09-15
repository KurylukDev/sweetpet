import styled from 'styled-components'
import Loading from './Loading'
import Item from "./Item";

const ItemList = ({ items }) => {
    if ( items.length > 0 ){
        return (
            <>
    
    <ItemsContainer>
        {
            items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} imageUrl={item.image[0]} stock={item.stock} category={item.categoryId} />)

        }
        </ItemsContainer>
            
            
            </>
        );
    
        }else{
    
            return(
                <Loading/>
    
                )
    
        }
}

export default ItemList;


const ItemsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-item:center;
margin: 0 auto;
    padding: 40px 0;
    max-width:1200px;
`;