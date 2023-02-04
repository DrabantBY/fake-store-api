import { useCartState } from '../../state';
import GoodsNotFound from '../Products/GoodsNotFound';
import CartList from './CartList';

const Cart = () => {
  const { cartState } = useCartState();
  return cartState.length === 0 ? <GoodsNotFound /> : <CartList products={cartState} />;
};

export default Cart;
