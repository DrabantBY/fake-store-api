import { useNavigate, Link } from 'react-router-dom';
import { useCartState } from '../../state';
import TableHeaders from '../Products/TableHeaders';
import CartPagination from './CartPagination';
import CartListBody from './CartListBody';
import type { CartItemInterface } from '../../type';

const CartList = (props: { products: CartItemInterface[] }) => {
  const { products } = props;
  const navigate = useNavigate();
  const { getCartParams } = useCartState();
  const { cartSum } = getCartParams();
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped align-middle caption-top">
          <caption>
            <CartPagination />
          </caption>
          <TableHeaders />
          <CartListBody products={products} />
        </table>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>
          go back
        </button>
        <button type="button" className="btn btn-primary" disabled>
          Total: {cartSum}$
        </button>
        <Link to="/purchase" className="btn btn-primary">
          buy
        </Link>
      </div>
    </>
  );
};

export default CartList;
