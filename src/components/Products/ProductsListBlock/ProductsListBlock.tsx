import { ProductInterface } from '../../../type';
import ProductsItem from './ProductsItem';

const ProductsListBlock = (props: { productsByFilters: ProductInterface[] }) => {
  const { productsByFilters } = props;

  return (
    <div className="row row-cols-1 row-cols-lg-4 g-3">
      {productsByFilters.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsListBlock;
