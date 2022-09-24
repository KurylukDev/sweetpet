import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  { firestoreFetch}  from '../utils/fbFetch'

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams()

    //componentDidUpdate
    useEffect(() => {
 
            firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));

    }, [idCategory]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;