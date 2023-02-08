import type { ProductInterface } from '@/types';

const sortByQueryParams = (products: ProductInterface[], value: string) => {
  const [prop, direction] = value.split('-');

  const sortASC = (a: ProductInterface, b: ProductInterface): number =>
    a[prop as 'price' | 'rating'] - b[prop as 'price' | 'rating'];

  const sortDESC = (a: ProductInterface, b: ProductInterface): number =>
    b[prop as 'price' | 'rating'] - a[prop as 'price' | 'rating'];

  return [...products].sort(direction === 'asc' ? sortASC : sortDESC);
};

export default sortByQueryParams;
