import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {firestoreFetchOne} from "../utils/fbFetch";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;