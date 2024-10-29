import React from 'react';
import {Button} from '@mui/material';
import "./counter.css"

const Counter = ({ count, sumar, restar, onAdd }) => {
    return (
        <div className='contador' >
        <Button className='disminuir pad 'variant='contained' onClick={restar}>-</Button>
        <kbd className="kbd kbd-lg pad">{count}</kbd>
        <Button variant='contained'className='pad' onClick={sumar}>+</Button>


        <Button variant='contained' className="agregar" onClick={()=>{onAdd(count);}}>Agregar al carrito</Button>
        </div>
    );
};

export default Counter;