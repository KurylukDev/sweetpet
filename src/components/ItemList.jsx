import styled from 'styled-components'
import Loading from './Loading'
import Item from "./Item";

const ItemList = ({ items }) => {
    if ( items.length > 0 ){
        return (
            <>
    
    <ItemsContainer>
        {
            items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} imageUrl={item.image[0]} stock={item.stock} />)

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
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .loading{
        width:100%;
        height:800px;
        position:relative;
        top:50;
        right:50;
    }
`;