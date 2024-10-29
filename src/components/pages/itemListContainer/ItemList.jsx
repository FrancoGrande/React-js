import React from 'react'
import ProductCard from '../../common/productCard/ProductCard';
import "./itemList.css"

    const ItemList = ({items}) => {



        return(<div className='cards'>



        {items.length > 0 ? items.map((item)=>{
            return (<ProductCard key={item.id} {...item}/>

            )
        }) : <h1>cargando...</h1>
        }
        </div>
    )
}

export default ItemList;