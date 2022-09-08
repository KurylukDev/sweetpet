import ItemList from '../components/ItemList';
import fetchCustom from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    console.log(datos);

    //componentDidUpdate
    useEffect(() => {
      fetchCustom(2000, products)
            .then(res => setDatos(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;