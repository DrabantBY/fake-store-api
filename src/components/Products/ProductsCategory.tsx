import { useLoaderData } from 'react-router-dom';
import type { ProductInterface } from '../../type';
import ProductsItem from './ProductsItem';

const ProductsCategory = () => {
  const products = useLoaderData() as ProductInterface[];
  return (
    <ul>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
export default ProductsCategory;
