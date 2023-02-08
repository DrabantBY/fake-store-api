import type { ProductInterface } from '@/types';

const filterBySearch = (product: ProductInterface, key: string) => {
  if (!key) return true;

  const { title, rating, price } = product;
  const props = [title, rating, price].map((prop) => prop.toString().toLowerCase());

  return props.some((prop) => prop.includes(key));
};

export default filterBySearch;
