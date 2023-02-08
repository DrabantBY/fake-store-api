import useCartState from '@hooks/useCartState';
import { ReactComponent as IconArrowPrev } from '@assets/arrow-left-square.svg';
import { ReactComponent as IconArrowNext } from '@assets/arrow-right-square.svg';

const CartItemsControls = ({ id }: { id: number }) => {
  const [getCartItemNumber, updateCartItemNumber] = useCartState((state) => [
    state.getCartItemNumber,
    state.updateCartItemNumber,
  ]);

  const currentNumber = getCartItemNumber(id);

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-outline-primary p-1"
        onClick={() => updateCartItemNumber(id, -1)}>
        <IconArrowPrev width={25} height={25} />
      </button>
      <button type="button" className="btn btn-primary">
        {currentNumber}
      </button>
      <button
        type="button"
        className="btn btn-outline-primary p-1"
        onClick={() => updateCartItemNumber(id, 1)}>
        <IconArrowNext width={25} height={25} />
      </button>
    </div>
  );
};

export default CartItemsControls;
