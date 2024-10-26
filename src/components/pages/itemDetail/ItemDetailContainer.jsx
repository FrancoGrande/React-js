import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {products} from "../../productsMock";
import { useParams } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';



const ItemDetailContainer = () => {
    const [item,setItem] =useState({});
    const {addToCart, getTotalQuantityById } = useContext(CartContext);

    const {id} =useParams()

    let totalItems = getTotalQuantityById(id);



    useEffect(()=> {

        let product = products.find((product) => product.id === id);
        if (product){
            setItem(product)
        }

    }, [id]);

    const onAdd = (quantity) => {
        let productosParaCarrito = {...item, quantity}
        addToCart(productosParaCarrito)
    };

    return <ItemDetail item= {item} onAdd={onAdd}   totalItems={totalItems}/>
};


export default ItemDetailContainer