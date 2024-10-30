import React from 'react'
import ProductCard from '../../common/productCard/ProductCard';
import "./itemList.css"

    const ItemList = ({items}) => {

        
    const addProductsToDB = () => {
        products.forEach((product) => {
        addDoc(collection(db, "productos"), product);
        });
    };

        return(<div className='cards'>

        {/* <Link onClick={addProductsToDB} className="reloadProducts"> */}

        {items.length > 0 ? items.map((item)=>{
            return (<ProductCard key={item.id} {...item}/>

            )
        }) : <h1>cargando...</h1>
        }
        </div>
    )
}

export default ItemList;