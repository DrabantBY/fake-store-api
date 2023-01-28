import filterByRatingPrice from './filterByRatingPrice';
import filterBySearch from './filterBySearch';
import sortByQueryParams from './sortByQueryParams';
import type { ProductInterface } from '../type';

const filterByQueryParams = (products: ProductInterface[], searchParams: URLSearchParams) => {
  const search = searchParams.get('search') ?? '';
  const sort = searchParams.get('sort') ?? '';

  const minRating = Number(searchParams.get('minRating') ?? 0);
  const maxRating = Number(searchParams.get('maxRating') ?? 5);
  const minPrice = Number(searchParams.get('minPrice') ?? 20);
  const maxPrice = Number(searchParams.get('maxPrice') ?? 800);

  const productsByFilters = products.filter(
    (product) =>
      filterBySearch(product, search) &&
      filterByRatingPrice(product, minRating, maxRating, 'rating') &&
      filterByRatingPrice(product, minPrice, maxPrice, 'price')
  );
  return sort ? sortByQueryParams(productsByFilters, sort) : productsByFilters;
};

export default filterByQueryParams;
