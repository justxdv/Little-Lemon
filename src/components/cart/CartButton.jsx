import ShoppingCartIcon from "../../assets/images/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link className="relative h-12" to="/cart">
      <b className="absolute top-2 right-3 select-none">
        {cart.length || null}
      </b>
      <img className="h-full" src={ShoppingCartIcon} alt="Shopping Cart Icon" />
    </Link>
  );
};

export default Cart;
