import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../config-firebase";



const ItemDetailContainer = () => {
    const [item,setItem] =useState({});
    const {addToCart, getTotalQuantityById } = useContext(CartContext);

    
    const {id} =useParams()

    let totalItems = getTotalQuantityById(id);



    useEffect(()=> {

        let productscollection = collection(db, "productos");
        let refDoc = doc(productscollection, id);
        let getProduct = getDoc(refDoc);
        getProduct.then((res) => setItem({...res.data(), id: res.id }));

    }, [id]);

    const onAdd = (quantity) => {
        let productosParaCarrito = {...item, quantity}
        addToCart(productosParaCarrito)
    };

    return <ItemDetail item= {item} onAdd={onAdd}   totalItems={totalItems}/>
};


export default ItemDetailContainer