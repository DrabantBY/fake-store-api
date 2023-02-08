import { useSearchParams } from 'react-router-dom';
import ProductsListRow from '../Products/ProductsListRow';
import type { CartItemInterface } from '@/types';

const CartListBody = ({ products, items }: { products: CartItemInterface[]; items: number }) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);

  const startIndex = (currentPage - 1) * items;
  const endIndex = currentPage * items;

  return (
    <tbody className="table-group-divider">
      {products.slice(startIndex, endIndex).map((product, index) => (
        <ProductsListRow key={product.id} product={product} index={index + startIndex + 1} />
      ))}
    </tbody>
  );
};

export default CartListBody;
