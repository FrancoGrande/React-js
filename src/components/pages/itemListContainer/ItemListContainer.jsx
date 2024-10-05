import { useEffect, useState } from "react";
import {products} from "../../productsMock";
import ItemList from "./itemList";
import './ItemList.css'
import { useParams } from "react-router-dom";



const ItemListContainer = () => {


const [items, setItems] = useState([])
const {categoryName} = useParams()

  useEffect(() => {
    
    const productsFiltered = products.filter(
      (product) => product.category === categoryName
    );
    
    const getProducts =new Promise((res, rej) =>{
    let existe= true;
    if(existe) {
      res(categoryName ? productsFiltered : products)
  
    } else{
      rej({message: "algo malio sal"})
    }
  });

  getProducts
  .then((response) =>{
    setItems(response)
    
  })
  .catch((error) =>{
    console.log("algo malo realmente sal", error);
  });
 }, [categoryName])

  return <ItemList items={items} />;      // le decimos al componente hijo(ItemList) que mediante props le damos algo que se llama items y que le da un array de items
}

export default ItemListContainer;