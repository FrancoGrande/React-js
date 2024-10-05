import { useEffect, useState } from "react";
import {products} from "../../productsMock";
import ItemList from "./itemList";
import './ItemList.css'
const ItemListContainer = () => {

  const [items, setItems] = useState([])



  
  useEffect(() => {
    const getProducts = new Promise((res, rej)=> {
      
      
      let productMount = true;
      if(productMount){
        res(products)
      } else {
        rej({message: "algo malio sal, no se cargaron los productos"})
      }
    });
    
    getProducts
    .then((response) =>setItems(response))
    .catch((rej)=> {console.log("error", rej)
    })
  }, [])

  return <ItemList items={items} />;      // le decimos al componente hijo(ItemList) que mediante props le damos algo que se llama items y que le da un array de items
}

export default ItemListContainer;