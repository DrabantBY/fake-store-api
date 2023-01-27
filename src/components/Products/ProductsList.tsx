import { useLoaderData } from 'react-router-dom';
import ProductsItem from './ProductsItem';
import useFilterByQueryParams from '../../hooks/useFilterByQueryParams';
import type { ProductInterface } from '../../type';

const ProductsList = () => {
  const products = useLoaderData() as ProductInterface[];
  const productsByQueryParams = useFilterByQueryParams(products);

  return productsByQueryParams.length === 0 ? (
    <h2 className="display-1">Goods not found</h2>
  ) : (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
      {productsByQueryParams.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
