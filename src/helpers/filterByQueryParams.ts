import filterByRatingPrice from './filterByRatingPrice';
import filterBySearch from './filterBySearch';
import sortByQueryParams from './sortByQueryParams';
import filterByCategory from './filterByCategory';
import type { ProductInterface } from '../types';

const filterByQueryParams = (products: ProductInterface[], searchParams: URLSearchParams) => {
  const search = searchParams.get('search') ?? '';
  const sort = searchParams.get('sort') ?? '';
  const category = searchParams.get('category') ?? '';

  const minRating = Number(searchParams.get('minRating') ?? 0);
  const maxRating = Number(searchParams.get('maxRating') ?? 5);
  const minPrice = Number(searchParams.get('minPrice') ?? 10);
  const maxPrice = Number(searchParams.get('maxPrice') ?? 10000);

  const productsByFilters = products.filter(
    (product) =>
      filterByCategory(product, category) &&
      filterBySearch(product, search) &&
      filterByRatingPrice(product, minRating, maxRating, 'rating') &&
      filterByRatingPrice(product, minPrice, maxPrice, 'price')
  );
  return sort ? sortByQueryParams(productsByFilters, sort) : productsByFilters;
};

export default filterByQueryParams;
