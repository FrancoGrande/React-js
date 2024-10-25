import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        let itemExist = cart.some((item) => item.id === product.id);

        if (itemExist) {

            let newArray = cart.map((item) => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity}
                } else {
                    return item
                }
            })
            setCart(newArray)  
        } else {
            setCart([...cart, product]);
        }
    };


    const getTotalQuantityById= (id) => {
        
        let product = cart.find((product) => product.id === id);
        return product ? product.quantity : 1
    };

    const ClearCart = () => {

        setCart([]);

    }

    const DeleteById =(id) => {
        
        let arrayFiltrado = cart.filter((item) => item.id !== id);
        setCart(arrayFiltrado)
        
    }

    const GetTotalAmount = () => {
        let totalCarrito= cart.reduce((acc, product)=>{ 
            return acc + (product.price * product.quantity)
        }, 0)
        return totalCarrito
    }

    const GetTotalItems = () => {
        let totalItems = cart.reduce((acc, product)=>{
            return acc + product.quantity
        },0)
        return totalItems
    }
    let data ={cart, addToCart, ClearCart, DeleteById , GetTotalAmount, GetTotalItems};

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>;
};
