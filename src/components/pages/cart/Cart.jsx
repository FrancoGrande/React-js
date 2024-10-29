import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = ({ cart, ClearCart, DeleteById, total }) => {
  return (
    <div>
      <h1>Tu carrito:</h1>
      {cart.length > 0 ? (
        <div className='contenedorCarrito'>
          {cart.map((product) => {
            return (
              
              // ------------------------------card carrito
              <div className='contenedorProductos'>
              <div className='cardCarrito' key={product.id}>

                <div className="imagen">
                <img src={product.img} alt="" />
                </div>

                <div className='productoNombre'>
                <h2>Producto:</h2>
                <h2>{product.category}</h2>
                <h2>{product.title}</h2>
                </div>

              <div className='productoPrecio'>
                <h2>Precio</h2>
                <h2>$ {product.price}</h2>
              </div>

              <div className='productoSubtotal'>
                <h3>Subtotal:</h3>
                <h3>$ {product.price * product.quantity}</h3>
              </div>
              <div className='botonEliminar'>
                <Button color='error' variant='contained' onClick={() => DeleteById(product.id)}>Eliminar</Button>
              </div>
              </div>
              </div>
              // -----------------------------fin de card carrito
            );
          })}

          <div className='vaciarFinalizar'>
            <h2>En el proximo paso vas a finalizar la compra ingresando tus datos presionando en finalizar compra.</h2>
          <h2>El total a pagar es: $ {total}</h2>
          <Button color='error' variant='contained' onClick={ClearCart}>Vaciar Carrito</Button>
          <Link to="/checkout"><Button variant='contained'>Finalizar Compra</Button></Link>
          </div>
        </div>
        
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Cart;