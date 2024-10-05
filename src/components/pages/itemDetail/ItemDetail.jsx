import React from 'react'
import {CardMedia} from '@mui/material';
import CounterContainer from '../../common/counter/CounterContainer';
import './ItemDetail.css'

    // const {data,error,isLoading} =useFetch("url")
const ItemDetail = ({item}) => {
return (
        <div className='Card'>
            <CardMedia
            component="img"
            image={item.img}
            alt="asd"
            />
            <h2>{item.title}</h2>
            <h3>{item.descripcion}</h3>
            <h3>{item.price}</h3>
            <CounterContainer />
            <button variant='contained'>Comprar</button>
        </div>
    );
};

export default ItemDetail;