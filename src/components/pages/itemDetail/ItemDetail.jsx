import React from 'react'
import {CardMedia} from '@mui/material';
import CounterContainer from '../../common/counter/CounterContainer';


    // const {data,error,isLoading} =useFetch("url")
const ItemDetail = ({item}) => {
return (
        <div>
            <CardMedia
            component="img"
            height="194"
            image={item.img}
            alt="asd"
            />
            <h2>{item.title}</h2>
            <h3>{item.descripcion}</h3>
            <h3>{item.price}</h3>
            <CounterContainer />
            <button>Comprar</button>
        </div>
    );
};

export default ItemDetail;