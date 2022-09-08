import styled from 'styled-components'

import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <ItemsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} imageUrl={item.image[0]} stock={item.stock} />)
            : <img className='loading' src='https://i.pinimg.com/originals/ac/b7/ec/acb7ec095b453e0d784d8c20b1f62d4c.gif' alt='loading'></img>
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

    .loading{
        width:100%;
        height:800px;
        position:relative;
        top:50;
        right:50;
    }
`;