import ProductsListRow from '../ProductsListRow';
import type { ProductInterface } from '../../../types';

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
