import { CartContext } from '../../../context/CartContext';
import Cart from '../cart/Cart';
import { useContext } from 'react';

const CartContainer = () => {

  
  const { cart, ClearCart, DeleteById ,GetTotalAmount} = useContext(CartContext);
  
  let total = GetTotalAmount();
  
  
  return <Cart cart={cart} ClearCart={ClearCart} DeleteById={DeleteById}  total={total} />
}

export default CartContainer