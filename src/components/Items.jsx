import ItemCount from './ItemCount'

const Item = ({image, title, price, brand, description, onAdd, stock, item}) => {   //hook
    // const [isValid, setIsValid] = useState(false);
    // const [show, setShow] = useState(0);
    // const [title, setTitle] = useState("Coder");


    return (
        <div className="video-container">
            <div className="video-image">
            <img src={image} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <ItemCount onAdd={onAdd}/>
            <p>Precio: $ {price}</p>
            <h4>Marca {brand}</h4>
            <p>{description}</p>
            <p>Stock: {stock}</p>
            </div>
        </div>
    );
}

export default Item;