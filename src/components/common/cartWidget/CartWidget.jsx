import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} color="primary" showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  )
}

export default CartWidget