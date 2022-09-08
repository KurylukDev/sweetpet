import styled from 'styled-components'

import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <ItemsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} imageUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ItemsContainer>
    );
}

export default ItemList;


const ItemsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;