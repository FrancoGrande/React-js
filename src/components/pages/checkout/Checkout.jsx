import { useState } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";


const Checkout = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",  
    });

    const {cart, GetTotalAmount} = useContext(CartContext);

    const hanlesubmit = (e) => {
        e.preventDefault();
        let total = GetTotalAmount();
        
        const order = {
            buyer: user,
            items: cart,
            total,
        }
        console.log(order)
    }

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