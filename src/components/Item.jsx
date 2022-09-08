import styled from 'styled-components'
const Item = ({ id, title, stock, price, imageUrl }) => {
    return (
    <ProductContainer>
            <img className='imgProducts' src={imageUrl} alt={title} />
            <div className='infoProducts'>
        <h2 className='titleProduct'>{title}</h2>
                <div>
                    <strong>$ {price}</strong>
                </div>
                <div>
                    <p>{stock} unid.</p>
                </div>
                <button className='buttonProducts'>Detalles del producto</button>
                </div>
        </ProductContainer>
    );
}

export default Item;

const ProductContainer = styled.div`
background-color: rgba(231, 231, 231, 0.514);
    border: 2px #939393 solid;
    border-radius:5px;
    box-shadow: 5px 5px 5px #939393;
    width: 25vw;
    margin: 10px;

    .imgProducts{
        background-color:white;
     width:80%;
    }

    .infoProducts{
        dispaly:flex;
        
    }

    .titleProduct{
        font-size:1rem;
    }
    .buttonProducts{
        width:20vw;
        height:100%;
        font-size: 1rem;
        background-color:rgba(2, 2, 2, 0.514);
        color:white;
        display: flex;
        justify-content:center;
        align-item:center;
        margin:5px auto;
    }
`;
