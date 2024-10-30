import { useEffect, useState } from "react";
import ItemList from "./itemList";
import './ItemList.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config-firebase";



const ItemListContainer = () => {



const [items, setItems] = useState([])
const {categoryName} = useParams()

  useEffect(() => {
    
    const itemCollection= collection(db, "productos")

    let consulta =itemCollection;


    
    if(categoryName){
        consulta = query(itemCollection, where("category", '==', categoryName))
    };

    getDocs(consulta).then((Snapshot) => {
        setItems(Snapshot.docs.map((doc) => ({ id: doc.id ,...doc.data()})));
    }
    )

}, [categoryName])



  return <ItemList items={items} />; 
}

export default ItemListContainer;