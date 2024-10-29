import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    //añadir al carrito por id, si existe cambia la cantidad en ese elemento en el nuevo array 
    const addToCart = (product) => {
        setCart([...cart, product]);
        let itemExist = cart.some((item) => item.id === product.id);

        if (itemExist) {

            let newArray = cart.map((elemento) => {
                if(elemento.id === product.id){
                    return {...elemento, quantity: product.quantity}
                } else {
                    return elemento
                }
            })
            setCart(newArray)  
        } else {
            setCart([...cart, product]);
        }
    };

    // total de de un item por id
    const getTotalQuantityById= (id) => {
        
        let product = cart.find((product) => product.id === id);
        return product ? product.quantity : 1
    };

    // limpiar carrito
    const ClearCart = () => {

        setCart([]);

    }
    // delete by id
    const DeleteById =(id) => {
        
        let arrayFiltrado    =cart.filter((elemento)=> elemento.id !== id);
        setCart(arrayFiltrado);
        
    }
    // total
    const GetTotalAmount = () => {
        let totalCarrito= cart.reduce((acc, product)=>{ 
            return acc + (product.price * product.quantity)
        }, 0)
        return totalCarrito
    }


    // total de items
    const GetTotalItems = () => {
        let totalItems = cart.reduce((acc, product)=>{
            return acc + product.quantity
        },0)
        return totalItems
    }

    
    let data ={cart, addToCart, ClearCart, DeleteById , GetTotalAmount, GetTotalItems, getTotalQuantityById};

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>;
};
