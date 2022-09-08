import { useState, useEffect } from 'react'
import Item from '../components/Items';

const Items = () => {
  const [data, setData] = useState([])
  //componentDidMount
  const onAdd = () =>{
    alert('Producto Añadido')
  }
  useEffect(() => {
      // aqui hago lo que quiero hacer cuando el componente se monte en el DOM
      // en este caso, consulto a la BD
      const dataBD = [
        {
          id: 1,
          stock: 5,
          initial: 1,
          onAdd:{onAdd},
          title: "Cat Chow sabor carne y pollo 1kg",
          price: "450",
          brand: "Cat Chow",
          image: "https://ardiaprod.vtexassets.com/arquivos/ids/219057/Alimento-Seco-para-Gatos-Cat-Chow-Adultos-Carne-y-Pollo-1-Kg-_1.jpg?v=637778475325170000",
          description: "Comida para gato Cat Chow sabor Carne y Pollo."
        },
        {
          id: 2,
          stock: 5,
          initial: 1,
          onAdd:{onAdd},
          title: "Whiskas sabor Carne 3kg",
          price: "650",
          brand: "Whiskas",
          image: "https://jumboargentina.vtexassets.com/arquivos/ids/586464/Alimento-Whiskas-Para-Gatos-Carne-3kg-1-814242.jpg?v=637265784394130000",
          description: "Comida para gato Whiskas sabor Carne."
        }
      ];

      setData(dataBD);
  }, []);

    return (
        <>
        {
          data.map(item => (
            <Item
                    key={item.id}
                    stock={item.stock}
                    initial={item.initial}
                    onAdd={onAdd}
                    title={item.title}
                    price={item.price}
                    brand={item.brand}
                    image={item.image}
                    description={item.description} />
          ))
        }
        </>
    );
}

export default Items;