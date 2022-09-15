import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "../components/ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem} = useParams();

    useEffect(() => {
        if(idItem){
            customFetch(2000, products.find(item => item.id ===  parseInt(idItem)))
                .then(result => setDato(result))
                .catch(err => console.log(err))

        }
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;