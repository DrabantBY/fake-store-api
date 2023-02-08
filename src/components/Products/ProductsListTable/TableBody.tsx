import type { ProductInterface } from '@/types';
import ProductsListRow from '../ProductsListRow';

const TableBody = ({ products }: { products: ProductInterface[] }) => {
  return (
    <tbody className="table-group-divider">
      {products.map((product, index) => (
        <ProductsListRow key={product.id} product={product} index={index + 1} />
      ))}
    </tbody>
  );
};

export default TableBody;
