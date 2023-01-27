import type { ProductInterface } from '../type';

export const filterProductsByWomen = (products: ProductInterface[]) =>
  products.filter((product) => product.category.startsWith('women'));

export const filterCategoryByWomen = (categories: string[]) =>
  categories.filter((category) => category.startsWith('women'));
