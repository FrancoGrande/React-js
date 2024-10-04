import React from 'react'
import ProductCard from '../../common/productCard/ProductCard';
import "./itemList.css"

    const ItemList = ({items}) => {

        return(<div className='cards'>

        {items.map((item)=>{
            return (<ProductCard key={item.id} {...item}/>)
        })}
        </div>
    )
}

export default ItemList;