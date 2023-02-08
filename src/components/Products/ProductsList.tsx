import { Suspense } from 'react';
import { useLoaderData, useSearchParams, Await } from 'react-router-dom';
import filterByQueryParams from '@helpers/filterByQueryParams';
import ProductsListBlock from './ProductsListBlock/ProductsListBlock';
import ProductsListTable from './ProductsListTable/ProductsListTable';
import GoodsNotFound from './GoodsNotFound';
import Spinner from './Spinner';
import ProductsPagination from './ProductsPagination';
import type { ProductsResponseType } from '@/types';

const ProductsList = () => {
  const { response } = useLoaderData() as { response: Promise<ProductsResponseType> };
  const [searchParams] = useSearchParams();
  const PRODUCTS_PER_PAGE = Number(import.meta.env.VITE_PRODUCTS_PER_PAGE);

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={response}>
        {(data: ProductsResponseType) => {
          const { products } = data;
          const productsByFilters = filterByQueryParams(products, searchParams);

          if (productsByFilters.length === 0) {
            return <GoodsNotFound />;
          }

          const page = Number(searchParams.get('page') ?? 1);
          const pageNumber = Math.ceil(productsByFilters.length / PRODUCTS_PER_PAGE);
          const startPoint = (page - 1) * PRODUCTS_PER_PAGE;
          const endPoint = page * PRODUCTS_PER_PAGE;
          const currentProducts = productsByFilters.slice(startPoint, endPoint);

          const isBlock = (searchParams.get('view') ?? 'block') === 'block';

          return (
            <>
              {isBlock ? (
                <ProductsListBlock productsByFilters={currentProducts} />
              ) : (
                <ProductsListTable productsByFilters={currentProducts} />
              )}
              <ProductsPagination page={page} pageNumber={pageNumber} />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ProductsList;
