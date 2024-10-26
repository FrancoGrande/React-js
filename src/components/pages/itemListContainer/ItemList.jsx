import React from 'react'
import ProductCard from '../../common/productCard/ProductCard';
import "./itemList.css"

    const ItemList = ({items}) => {

        if(items.length === 0){

            return<h1>Cargando...</h1>

        }

        return(<div className='cards'>

        {items.map((item)=>{
            return (<ProductCard key={item.id} {...item}/>)
        })}
        </div>
    )
}

export default ItemList;