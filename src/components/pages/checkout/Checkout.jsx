import { useState } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import {db} from "../../../config-firebase";
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",  
    });

    const {cart, GetTotalAmount, ClearCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const hanlesubmit = (e) => {
        e.preventDefault();
        let total = GetTotalAmount();
        
        const order = {
            buyer: user,
            items: cart,
            total,
        };

            let refCollection = collection(db, "orders");
            addDoc(refCollection, order).then((res) => {
            setOrderId(res.id)
            console.log(res.id);
            ClearCart();
            })

    };

    const handleChange = (e) => {
        const {value, name} = e.target;

        setUser({
            ...user,
            [name]: value
        })

    }

return (
    <div>
    <h1>Proceso de compra:</h1>
    <form onSubmit={hanlesubmit}>

    <input 
    type="text" placeholder="Nombre"
    onChange={handleChange}
    name="name"
    />

    <input 
    type="text" 
    placeholder="Email" 
    onChange={handleChange}
    name="email"
    />

    <input 
    type="text" 
    placeholder="telefono"
    onChange={handleChange}
    name="phone"
    />

    <Button type="submit" variant="contained">Comprar</Button>
    </form>
    </div>
)
}

export default Checkout;