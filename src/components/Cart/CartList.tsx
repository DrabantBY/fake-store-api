import TableHeaders from '../Products/TableHeaders';
import CartPagination from './CartPagination';
import CartListBody from './CartListBody';
import type { CartItemInterface } from '../../type';

const CartList = (props: { products: CartItemInterface[] }) => {
  const { products } = props;

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle caption-top">
        <caption>
          <CartPagination />
        </caption>
        <TableHeaders />
        <CartListBody products={products} />
      </table>
    </div>
  );
};

export default CartList;
