import React from 'react'
import {CardMedia} from '@mui/material';
import CounterContainer from '../../common/counter/CounterContainer';
import './ItemDetail.css'

    // const {data,error,isLoading} =useFetch("url")
const ItemDetail = ({item, onAdd, totalItems}) => {
return (
        <div className='Card'>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.descripcion}</h3>
            <h3>${item.price}</h3>
            <CounterContainer onAdd={onAdd} stock= {item.stock} totalItems={totalItems}/>
            <h3>Ya tenes: {totalItems} unidades en el carrito</h3>
        </div>
    );
};

export default ItemDetail;