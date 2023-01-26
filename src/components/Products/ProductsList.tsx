import { useLoaderData } from 'react-router-dom';
import ProductsItem from './ProductsItem';
import type { ProductInterface } from '../../type';

const ProductsList = () => {
  const products = useLoaderData() as ProductInterface[];
  return (
    <ul>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
