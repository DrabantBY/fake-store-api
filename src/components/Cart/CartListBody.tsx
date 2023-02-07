import { useSearchParams } from 'react-router-dom';
import ProductsListRow from '../Products/ProductsListRow';
import type { CartItemInterface } from '../../types';

const CartListBody = ({ products }: { products: CartItemInterface[] }) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);
  const currentTotal = Number(searchParams.get('total') ?? 3);
  const startIndex = (currentPage - 1) * currentTotal;
  const endIndex = currentPage * currentTotal;

  return (
    <tbody className="table-group-divider">
      {products.slice(startIndex, endIndex).map((product, index) => (
        <ProductsListRow key={product.id} product={product} index={index + startIndex + 1} />
      ))}
    </tbody>
  );
};

export default CartListBody;
