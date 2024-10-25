import { Button } from '@mui/material'

const Cart = ({cart, ClearCart, DeleteById ,total}) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map(product=> {
        return (
          <div>
            <h2>{product.title}</h2>
          <h3>{product.price}</h3>
          <h3>Subtotal: { product.price* product.quantity}</h3>
          <Button variant='contained' onClick={() => DeleteById(product.id)} >Eliminar</Button>
          </div>
        )
      })}
      <h3>Total: ${total}</h3>
      
      <Button variant='contained'onClick={ClearCart} >Vaciar Carrito</Button>
</div>
  )
}

export default Cart