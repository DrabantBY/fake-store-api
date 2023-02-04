import { Suspense } from 'react';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';
import ProductsListBlock from './ProductsListBlock/ProductsListBlock';
import ProductsListTable from './ProductsListTable/ProductsListTable';
import GoodsNotFound from './GoodsNotFound';
import Spinner from './Spinner';
import filterByQueryParams from '../../helpers/filterByQueryParams';
import type { ProductsResponseType } from '../../types';

const ProductsList = () => {
  const { response } = useLoaderData() as { response: Promise<ProductsResponseType> };
  const [searchParams] = useSearchParams();

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={response}>
        {(data: ProductsResponseType) => {
          const { products } = data;
          const productsByFilters = filterByQueryParams(products, searchParams);

          if (productsByFilters.length === 0) {
            return <GoodsNotFound />;
          }

          const isBlock = (searchParams.get('view') ?? 'block') === 'block';

          if (isBlock) {
            return <ProductsListBlock productsByFilters={productsByFilters} />;
          }

          return <ProductsListTable productsByFilters={productsByFilters} />;
        }}
      </Await>
    </Suspense>
  );
};

export default ProductsList;
