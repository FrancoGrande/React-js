import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import {db} from "../../../config-firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css"


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
    <div >

    {
    orderId ? <h1> Tu orden de compra es: {orderId}</h1> : 
    <form  onSubmit={hanlesubmit}>
    <h1>Proceso de compra:</h1>
    <div className="inputDiv">

    <TextField id="outlined-basic" label="Nombre" variant="outlined"
    onChange={handleChange}
    name="name"
    />

    <TextField id="outlined-basic" label="Email" variant="outlined" 
    type="text" 
    onChange={handleChange}
    name="email"
    />

    <TextField id="outlined-basic" label="telefono" variant="outlined" 
    type="text" 
    onChange={handleChange}
    name="phone"
    />
    </div>
    <div className="buttonComprar">
        <Button type="submit" variant="contained">Comprar</Button>
    </div>
    </form>
        }
    </div>
)
}

export default Checkout;