import type { ProductInterface } from '../types';

const filterByRatingPrice = (
  product: ProductInterface,
  minValue: number,
  maxValue: number,
  key: 'price' | 'rating'
) => product[key] >= minValue && product[key] <= maxValue;

export default filterByRatingPrice;
