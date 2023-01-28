import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import type { FilterArgsType, ProductInterface } from '../type';
import filterByQueryParams from '../helpers/filterByQueryParams';

const useFilterByQueryParams = (products: ProductInterface[]) => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') ?? '';
  const sort = searchParams.get('sort') ?? '';

  const minRating = Number(searchParams.get('minRating') ?? 0);
  const maxRating = Number(searchParams.get('maxRating') ?? 5);
  const minPrice = Number(searchParams.get('minPrice') ?? 20);
  const maxPrice = Number(searchParams.get('maxPrice') ?? 800);

  const filters: FilterArgsType = { search, sort, minPrice, maxPrice, minRating, maxRating };

  return filterByQueryParams(products, filters);
};

export default useFilterByQueryParams;
