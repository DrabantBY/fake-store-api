import ProductsListRow from '../ProductsListRow';
import type { ProductInterface } from '../../../type';

const TableBody = (props: { products: ProductInterface[] }) => {
  const { products } = props;

  return (
    <tbody className="table-group-divider">
      {products.map((product, index) => (
        <ProductsListRow key={product.id} product={product} index={index + 1} />
      ))}
    </tbody>
  );
};

export default TableBody;
