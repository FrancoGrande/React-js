import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from "react";
import {CartContext} from "../../../context/CartContext";

const CartWidget = () => {

  const {GetTotalItems} = useContext(CartContext)

  let totalItems = GetTotalItems();

  return (
    <div>
      <Badge badgeContent={totalItems} color="primary" max={50} showZero={true} style={{color:"white", marginRight:"20px"}}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  )
}

export default CartWidget