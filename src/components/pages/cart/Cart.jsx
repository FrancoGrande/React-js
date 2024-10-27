import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = ({ cart, ClearCart, DeleteById, total }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => {
            return (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <h3>Subtotal: {product.price * product.quantity}</h3>
                <Button variant='contained' onClick={() => DeleteById(product.id)}>
                  Eliminar
                </Button>
              </div>
            );
          })}
          <Button variant='contained' onClick={ClearCart}>
            Vaciar Carrito
          </Button>
          <h2>El total a pagar es: $ {total}</h2>
          <Link to="/checkout">
            <Button variant='contained'>Finalizar Compra</Button>
          </Link>
        </div>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Cart;