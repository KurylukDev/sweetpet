import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Item = ({ id, title, stock, price, imageUrl, category }) => {
    return (
    <ProductContainer>
      <Link to={`/item/${id}`}>
                <div className="card">
  <div className="card__contImg">
  <img className='card__img' src={imageUrl} alt={title} />
  </div>
  <div className="card__contText">
    <p className="card__pCategory">{category}</p>
    <p className="card__pTitle">{stock} unid.</p>
    <h4 className='card__title'>{title}</h4>
    <strong className="card__price">$ {price}</strong>
  </div>
</div>
</Link>
        </ProductContainer>
    );
}

export default Item;

const ProductContainer = styled.div`
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: helvetica;
.card {
    float: left;
    border-radius: 10px;
    margin: 10px;
    width: 250px;
    overflow: hidden;
    box-shadow: 0 1px 1px 0px #707070;
    transition: all 200ms;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 1px 2px 5px 5px rgba(0,0,0,.1)
  }
  
  .card__contImg {
    padding: 2px;
    width: 100%;
    background: #f4f4f4;
  }
  
  .card__img {
    background-color:white;
    width:100%;
  }
  
  .card__contText {
    color: #1979e1;
    text-decoration: none;
    width: 100%;
    padding: 5px;
  }
  
  .card__pTitle {
    color: #707070;
    margin-top:1px;
  }

  .card__pCategory{
    font-size:12px;
    color: #707070;
    margin-top:10px;
    margin-bottom:4px;
  }
  
  .card__price {
    margin-top: 10px;
    font-size: 14px;
    color: #f3722c;
  }
`;
