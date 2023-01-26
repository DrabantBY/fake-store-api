import { useLoaderData, useSearchParams } from 'react-router-dom';
import type { ProductInterface } from '../type';

const useQueryParams = () => {
  const data = <ProductInterface[]>useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const [key, value] of searchParams.entries()) {
  //     console.log(`${key} -${value}`);
  //   }

  return data;
};

export default useQueryParams;
