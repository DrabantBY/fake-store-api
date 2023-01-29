import type { ProductInterface } from '../type';

const filterByCategory = (product: ProductInterface, key: string) => {
  if (!key) return true;
  return product.category === key;
};

export default filterByCategory;
