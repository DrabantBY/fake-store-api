import { useLoaderData, useSearchParams } from 'react-router-dom';
import ProductsListBlock from './ProductsListBlock/ProductsListBlock';
import ProductsListTable from './ProductsListTable/ProductsListTable';
import GoodsNotFound from './GoodsNotFound';
import filterByQueryParams from '../../helpers/filterByQueryParams';
import type { ProductInterface } from '../../type';

const ProductsList = () => {
  const products = useLoaderData() as ProductInterface[];
  const [searchParams] = useSearchParams();
  const productsByFilters = filterByQueryParams(products, searchParams);

  if (productsByFilters.length === 0) {
    return <GoodsNotFound />;
  }

  const isBlock = (searchParams.get('view') ?? 'block') === 'block';

  if (isBlock) {
    return <ProductsListBlock productsByFilters={productsByFilters} />;
  }

  return <ProductsListTable productsByFilters={productsByFilters} />;
};

export default ProductsList;
