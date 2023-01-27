import type { ProductInterface } from '../type';

const filterByRatingPrice = (
  product: ProductInterface,
  minValue: number,
  maxValue: number,
  key: 'price' | 'rating'
) => product[key] >= minValue && product[key] <= maxValue;

export default filterByRatingPrice;
