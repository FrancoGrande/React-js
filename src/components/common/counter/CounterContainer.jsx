import React, { useState } from 'react';
import Counter from './Counter';


const CounterContainer = ({onAdd, stock, totalItems}) => {
const [count, setCount] = useState(totalItems);

const sumar = () => {
    if(count < stock){
        setCount(count + 1);}
        alert('stock maximo');
};

    const restar = () => {
        if(count >0){
                setCount(count - 1);
                alert('no podes agregar menos de 1');
        }
    };

    let childprops = {
        count,
        sumar,
        restar,

    }
    return (
        <Counter 
        {...childprops}
        onAdd={onAdd}
        />
    );
    };

    export default CounterContainer;
