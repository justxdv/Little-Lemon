import ShoppingCartIcon from "../../assets/images/icons/shopping-cart.png";

const CartIcon = () => (
  <div className="relative">
    <div className="absolute top-0 left-0">3</div>
    <img src={ShoppingCartIcon} alt="" />
  </div>
);

export default CartIcon;
