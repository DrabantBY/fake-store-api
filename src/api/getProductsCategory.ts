import type { ProductInterface } from '../type';

const getProductsCategory = async (category: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const { products } = (await response.json()) as { products: ProductInterface[] };
    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getProductsCategory;
