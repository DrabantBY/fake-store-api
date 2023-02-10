import { useNavigate, Link } from 'react-router-dom';
import useCartState from '@hooks/useCartState';
import useLoginState from '@hooks/useLoginState';
import TableHeaders from '../Products/TableHeaders';
import CartPagination from './CartPagination';
import CartListBody from './CartListBody';
import type { CartItemInterface } from '@/types';

const CartList = ({ products }: { products: CartItemInterface[] }) => {
  const navigate = useNavigate();
  const id = useLoginState((state) => state.user?.id) as number;
  const { getCartParams } = useCartState();
  const { cartSum } = getCartParams();
  const PURCHASE_PER_PAGE = Number(import.meta.env.VITE_PURCHASE_PER_PAGE);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped align-middle caption-top">
          <caption>
            <CartPagination items={PURCHASE_PER_PAGE} />
          </caption>
          <TableHeaders />
          <CartListBody products={products} items={PURCHASE_PER_PAGE} />
        </table>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>
          back
        </button>
        <button type="button" className="btn btn-primary" disabled>
          Total: {cartSum}$
        </button>
        <Link to={`/order/${id}`} className="btn btn-primary">
          buy
        </Link>
      </div>
    </>
  );
};

export default CartList;
