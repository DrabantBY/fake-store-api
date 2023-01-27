import type { ProductInterface } from '../type';
import { filterProductsByWomen } from '../helpers/filterByWomen';

const getProductsList = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?skip=0&limit=100');
    const { products } = (await response.json()) as { products: ProductInterface[] };
    return filterProductsByWomen(products);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getProductsList;
