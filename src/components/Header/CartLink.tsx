import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '@assets/basket.svg';

const CartLink = ({ cartSize }: { cartSize: number }) => {
  return (
    <Link className="btn btn-outline-primary position-relative me-3" to="cart">
      <CartIcon height={25} width={25} />
      {Boolean(cartSize) && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary text-white fs-7">
          {cartSize}
        </span>
      )}
    </Link>
  );
};

export default CartLink;
