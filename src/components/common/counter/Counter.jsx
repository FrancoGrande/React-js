import React from 'react';
import {Button} from '@mui/material';
import "./counter.css"

const Counter = ({ count, sumar, restar, onAdd }) => {
    return (
        <div>
        <h1>{count}</h1>
        <Button variant='contained' onClick={sumar}>Incrementar</Button>

        <button variant='outlined' onClick={()=>{
            onAdd(count);
        }}
        >
            Agregar al carrito</button>




        <Button className='disminuir'variant='contained' onClick={restar}>Disminuir</Button>
        </div>
    );
};

export default Counter;