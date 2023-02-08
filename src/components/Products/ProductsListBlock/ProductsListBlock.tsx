import type { ProductInterface } from '@/types';
import ProductsListItem from './ProductsListItem';

const ProductsListBlock = ({ productsByFilters }: { productsByFilters: ProductInterface[] }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3 mb-3">
      {productsByFilters.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsListBlock;
