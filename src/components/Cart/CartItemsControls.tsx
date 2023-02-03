import useCartState from '../../state';
import { ReactComponent as IconArrowPrev } from '../../assets/arrow-left-square.svg';
import { ReactComponent as IconArrowNext } from '../../assets/arrow-right-square.svg';
import { CartItemInterface } from '../../type';

const CartItemsControls = (props: { product: CartItemInterface }) => {
  const { product } = props;
  const [getCartItemNumber, updateCartItemNumber] = useCartState((state) => [
    state.getCartItemNumber,
    state.updateCartItemNumber,
  ]);

  const currentNumber = getCartItemNumber(product.id);

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-primary p-1"
        onClick={() => updateCartItemNumber(product.id, -1)}>
        <IconArrowPrev width={25} height={25} />
      </button>
      <button type="button" className="btn btn-primary">
        {currentNumber}
      </button>
      <button
        type="button"
        className="btn btn-outline-primary p-1"
        onClick={() => updateCartItemNumber(product.id, 1)}>
        <IconArrowNext width={25} height={25} />
      </button>
    </div>
  );
};

export default CartItemsControls;
