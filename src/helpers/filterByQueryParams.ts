import filterByRatingPrice from './filterByRatingPrice';
import filterBySearch from './filterBySearch';
import sortByQueryParams from './sortByQueryParams';
import type { ProductInterface, FilterArgsType } from '../type';

const filterByQueryParams = (products: ProductInterface[], filters: FilterArgsType) => {
  const { search, sort, minPrice, maxPrice, minRating, maxRating } = filters;
  const productsByFilters = products.filter(
    (product) =>
      filterBySearch(product, search) &&
      filterByRatingPrice(product, minRating, maxRating, 'rating') &&
      filterByRatingPrice(product, minPrice, maxPrice, 'price')
  );
  return sort ? sortByQueryParams(productsByFilters, sort) : productsByFilters;
};

export default filterByQueryParams;
