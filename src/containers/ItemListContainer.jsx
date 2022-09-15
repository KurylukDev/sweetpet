import ItemList from '../components/ItemList';
import fetchCustom from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams()

    if (idCategory){

    }else

    console.log(datos);

    //componentDidUpdate
    useEffect(() => {
        if(idCategory){
            fetchCustom(2000, products.filter(item => item.categoryId === idCategory))
                  .then(res => setDatos(res))
                  .catch(err => console.log(err))

        }else{
            fetchCustom(2000, products)
            .then(res => setDatos(res))
            .catch(err => console.log(err))

        }
    }, [idCategory]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;